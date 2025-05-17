const bcrypt = require('bcryptjs');
const generateToken = require('../utils/jwt.util');

const Doctor = require('../models/Doctor');
const Appointment = require('../models/Appointment');
const { token } = require('morgan');

// exports.registerDoctor = async (req, res) => {
//   try {
//     const {
//       fullName,
//       email,
//       phone,
//       password,
//       specialty,
//       experience,
//       consultationFee,
//       bio,
//       location,
//       workingHours,
//       availableDays,
//     } = req.body;

//     const photo = req.files['photo']?.[0]?.filename || null;
//     const degreeDocs = req.files['degreeDocs']?.map(file => file.filename) || [];

//     if (!photo || degreeDocs.length === 0) {
//       return res.status(400).json({ message: 'Photo and degree documents are required.' });
//     }

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(req.body.password, salt);

//     const parsedWorkingHours = JSON.parse(workingHours);
//     const parsedAvailableDays = JSON.parse(availableDays);

//     const doctor = new Doctor({
//       fullName,
//       email,
//       phone,
//       password: hashedPassword, // (We'll hash later during auth)
//       photo,
//       degreeDocs,
//       specialty,
//       experience,
//       consultationFee,
//       bio,
//       location,
//       workingHours: parsedWorkingHours,
//       availableDays: parsedAvailableDays,
//     });

//     await doctor.save();

//     res.status(201).json({
//       message: 'Doctor registered successfully',
//       doctorId: doctor._id,
//     });
//   } catch (err) {
//     console.error('Registration Error:', err);
//     res.status(500).json({ message: 'Server error during registration' });
//   }
// };


exports.registerDoctor = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      password,
      specialty,
      experience,
      consultationFee,
      bio,
      location,
      workingHours, // Expected as JSON string: {"startTime": "09:00", "endTime": "17:00"}
      availableDays  // Expected as JSON string: ["Monday", "Wednesday"]
    } = req.body;

    // Parse workingHours and availableDays from JSON strings
    let parsedWorkingHours;
    let parsedAvailableDays;

    try {
      parsedWorkingHours = JSON.parse(workingHours);
      parsedAvailableDays = JSON.parse(availableDays);
    } catch (err) {
      return res.status(400).json({ message: 'Invalid JSON format for workingHours or availableDays' });
    }

    // Validate workingHours: must contain startTime and endTime in 24-hour format
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

    if (
      !parsedWorkingHours.startTime ||
      !parsedWorkingHours.endTime ||
      !timeRegex.test(parsedWorkingHours.startTime) ||
      !timeRegex.test(parsedWorkingHours.endTime)
    ) {
      return res.status(400).json({ message: 'Working hours must be in 24-hour format (HH:mm)' });
    }

    // Validate availableDays: must be a non-empty array
    if (!Array.isArray(parsedAvailableDays) || parsedAvailableDays.length === 0) {
      return res.status(400).json({ message: 'Available days must be a non-empty array' });
    }

    // Handle file uploads using req.files
    const photo = req.files?.photo?.[0]?.filename || null;
    const degreeDocs = req.files?.degreeDocs?.map(file => file.filename) || [];

    // Validate required files
    if (!photo || degreeDocs.length === 0) {
      return res.status(400).json({ message: 'Photo and degree documents are required' });
    }

    // Hash the password for security
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the new doctor record
    const doctor = new Doctor({
      fullName,
      email,
      phone,
      password: hashedPassword,
      photo,
      degreeDocs,
      specialty,
      experience,
      consultationFee,
      bio,
      location,
      workingHours: parsedWorkingHours,
      availableDays: parsedAvailableDays
    });

    // Save the doctor to the database
    await doctor.save();

    res.status(201).json({
      message: 'Doctor registered successfully',
      doctorId: doctor._id
    });

  } catch (err) {
    console.error('Registration Error:', err);
    res.status(500).json({ message: 'Server error during registration' });
  }
};
exports.loginDoctor = async (req, res) => {
  const { email, password } = req.body;

  try {
    const doctor = await Doctor.findOne({ email });

    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    const isMatch = await bcrypt.compare(password, doctor.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(doctor._id, 'doctor');

    res.status(200).json({
      message: 'Login successful',
      doctor: {
        _id: doctor._id,
        name: doctor.fullName,
        email: doctor.email,
        specialty: doctor.specialty,
      },
      token
    });
  } catch (error) {
    console.error('Doctor login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


// Get all doctors by specialty
exports.getDoctorsBySpecialty = async (req, res) => {
  try {
    const { specialty } = req.params;

    const doctors = await Doctor.find({ specialty });

    if (doctors.length === 0) {
      return res.status(404).json({ message: 'No doctors found for this specialty' });
    }

    const doctorsWithoutPasswords = doctors.map((doc) => {
      const { password, ...rest } = doc.toObject();
      return rest;
    });
    
    res.status(200).json(doctorsWithoutPasswords);
    
  } catch (error) {
    console.error('Get Doctors Error:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Search doctors by name, location, or availability
// exports.searchDoctors = async (req, res) => {
//   try {
//     const { name, location, time } = req.query;

//     const query = {};

//     if (name) {
//       query.fullName = { $regex: name, $options: 'i' }; // case-insensitive
//     }

//     if (location) {
//       query.location = { $regex: location, $options: 'i' };
//     }

//     const allDoctors = await Doctor.find(query);

//     let filteredDoctors = allDoctors;

//     if (time) {
//       filteredDoctors = allDoctors.filter((doctor) => {
//         const start = doctor.workingHours?.startTime;
//         const end = doctor.workingHours?.endTime;

//         if (!start || !end) return false;

//         return time >= start && time <= end;
//       });
//     }

//     if (filteredDoctors.length === 0) {
//       return res.status(404).json({ message: 'No matching doctors found' });
//     }

//     const doctorsWithoutPasswords = filteredDoctors.map((doc) => {
//       const { password, ...rest } = doc.toObject();
//       return rest;
//     });
    
//     res.status(200).json(doctorsWithoutPasswords);
//   } catch (error) {
//     console.error('Search Doctors Error:', error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// }



exports.searchDoctors = async (req, res) => {
  try {
    console.log('Received query parameters:', req.query);
    const { name, location, time, specialization, date } = req.query;

    const query = {};

    // Filter by name (case-insensitive)
    if (name) {
      query.fullName = { $regex: name, $options: 'i' };
    }

    // Filter by location (case-insensitive)
    if (location) {
      query.location = { $regex: location, $options: 'i' };
    }

    // Filter by specialization (case-insensitive)
    if (specialization) {
      query.specialty = { $regex: specialization, $options: 'i' };
    }

    const allDoctors = await Doctor.find(query);

    let filteredDoctors = allDoctors;

    // Filter by time (working hours of the doctor)
    if (time) {
      filteredDoctors = filteredDoctors.filter((doctor) => {
        const start = doctor.workingHours?.startTime;
        const end = doctor.workingHours?.endTime;

        if (!start || !end) return false;

        return time >= start && time <= end;
      });
    }

    // If a date is provided, filter by availability on that specific date
    if (date) {
      filteredDoctors = filteredDoctors.filter((doctor) => {
        const availableDates = doctor.availableDates || []; // assuming the doctor has an array of available dates
        return availableDates.includes(date);
      });
    }

    // If no doctors match the filters, return 404
    if (filteredDoctors.length === 0) {
      return res.status(404).json({ message: 'No matching doctors found' });
    }

    // Remove sensitive information (like password) from the results
    const doctorsWithoutPasswords = filteredDoctors.map((doc) => {
      const { password, ...rest } = doc.toObject();
      return rest;
    });

    res.status(200).json(doctorsWithoutPasswords);
  } catch (error) {
    console.error('Search Doctors Error:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};


exports.getPatientMedicalHistory = async (req, res) => {
  try {
    const doctorId = req.params.doctorId;
    const patientId = req.params.patientId;

    // Check if patient has ever requested an appointment with this doctor
    const requested = await Appointment.findOne({
      doctor: doctorId,
      patient: patientId
    });

    if (!requested) {
      return res.status(403).json({
        message: "Access denied. This patient has not requested an appointment with you."
      });
    }

    // Fetch full completed history of this patient (can include notes from other doctors too)
    const history = await Appointment.find({
      patient: patientId,
      status: 'Completed'
    })
      .populate('doctor', 'name specialty')
      .sort({ date: -1 });

    res.status(200).json({
      message: "Patient medical history fetched successfully.",
      history
    });

  } catch (error) {
    console.error("Error fetching patient history:", error);
    res.status(500).json({ message: "Server error" });
  }
};