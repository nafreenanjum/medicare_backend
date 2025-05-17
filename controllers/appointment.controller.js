const Appointment = require('../models/Appointment');
const moment = require('moment');

// const bookAppointment = async (req, res) => {
//   try {
//     const {
//       doctor,
//       patient,
//       appointmentDate,
//       appointmentTime,
//       reason,
//     } = req.body;

//     // Optional: Check for conflict (same doctor, date & time)
//     const existing = await Appointment.findOne({
//       doctor,
//       appointmentDate,
//       appointmentTime,
//       status: { $ne: 'Cancelled' }, // Ignore cancelled slots
//     });

//     if (existing) {
//       return res.status(400).json({
//         message: 'This timeslot is already booked for the selected doctor.',
//       });
//     }

//     const appointment = new Appointment({
//       doctor,
//       patient,
//       appointmentDate,
//       appointmentTime,
//       reason,
//     });

//     await appointment.save();

//     res.status(201).json({
//       message: 'Appointment booked successfully!',
//       appointmentId: appointment._id,
//     });
//   } catch (error) {
//     console.error('Booking Error:', error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// };
// const Patient = require('../models/Patient'); // Ensure this path is correct


// const bookAppointment = async (req, res) => {
//   try {
//     const {
//       doctor,
//       patient, // This is the patient ID
//       appointmentDate,
//       appointmentTime,
//       reason,
//     } = req.body;

//     // Validate required fields
//     if (!doctor || !patient || !appointmentDate || !appointmentTime) {
//       return res.status(400).json({ message: 'Missing required fields.' });
//     }

//     // Optional: Check if patient exists
//     const patientExists = await Patient.findById(patient);
//     if (!patientExists) {
//       return res.status(404).json({ message: 'Patient not found.' });
//     }

//     // Optional: Check if doctor exists
//     const doctorExists = await Doctor.findById(doctor);
//     if (!doctorExists) {
//       return res.status(404).json({ message: 'Doctor not found.' });
//     }

//     // Check for conflicts
//     const existing = await Appointment.findOne({
//       doctor,
//       appointmentDate,
//       appointmentTime,
//       status: { $ne: 'Cancelled' },
//     });

//     if (existing) {
//       return res.status(400).json({
//         message: 'This timeslot is already booked for the selected doctor.',
//       });
//     }

//     // Create appointment
//     const appointment = new Appointment({
//       doctor,
//       patient,
//       appointmentDate,
//       appointmentTime,
//       reason,
//     });

//     await appointment.save();

//     res.status(201).json({
//       message: 'Appointment booked successfully!',
//       appointmentId: appointment._id,
//     });
//   } catch (error) {
//     console.error('Booking Error:', error);
//     res.status(500).json({ message: 'Server Error', error: error.message });
//   }
// };

const Patient = require('../models/Patient'); // Ensure this path is correct
const Doctor = require('../models/Doctor'); // Ensure this path is correct


const bookAppointment = async (req, res) => {
  try {
    const {
      doctor, // doctor ID
      patient, // patient ID
      appointmentDate,
      appointmentTime,
      reason,
    } = req.body;

    // Log the incoming data to ensure correct values are being passed
    console.log("Received data:", req.body);

    // Validate required fields
    if (!doctor || !patient || !appointmentDate || !appointmentTime) {
      return res.status(400).json({ message: 'Missing required fields.' });
    }

    // Optional: Check if patient exists
    const patientExists = await Patient.findById(patient);
    if (!patientExists) {
      return res.status(404).json({ message: 'Patient not found.' });
    }

    // Optional: Check if doctor exists
    const doctorExists = await Doctor.findById(doctor); // Ensure the `doctor` is an ID, not a name
    if (!doctorExists) {
      return res.status(404).json({ message: 'Doctor not found.' });
    }

    // Check for appointment conflicts (same doctor, same time)
    const existing = await Appointment.findOne({
      doctor,
      appointmentDate,
      appointmentTime,
      status: { $ne: 'Cancelled' },
    });

    if (existing) {
      return res.status(400).json({
        message: 'This timeslot is already booked for the selected doctor.',
      });
    }

    // Create appointment
    const appointment = new Appointment({
      doctor,
      patient,
      appointmentDate,
      appointmentTime,
      reason,
    });

    await appointment.save();

    res.status(201).json({
      message: 'Appointment booked successfully!',
      appointmentId: appointment._id,
    });
  } catch (error) {
    console.error('Booking Error:', error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};


const getAppointmentsForDoctor = async (req, res) => {
  try {
    const { doctorId } = req.params;

    const today = moment().format('YYYY-MM-DD');

    const appointments = await Appointment.find({
      doctor: doctorId,
      appointmentDate: { $gte: today },
    })
      .populate('patient', 'fullName email phone photo') // show limited patient info
      .sort({ appointmentDate: 1, appointmentTime: 1 });

    if (!appointments.length) {
      return res.status(404).json({ message: 'No upcoming appointments found.' });
    }

    res.status(200).json(appointments);
  } catch (error) {
    console.error('Get Doctor Appointments Error:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};


const updateAppointmentStatus = async (req, res) => {
  try {
    const { appointmentId } = req.params;
    const { status } = req.body;

    const validStatuses = ['Confirmed', 'Cancelled', 'Completed'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid status value' });
    }

    const updated = await Appointment.findByIdAndUpdate(
      appointmentId,
      { status },
      { new: true }
    ).populate('patient', 'fullName email').populate('doctor', 'fullName');

    if (!updated) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    res.status(200).json({
      message: `Appointment ${status.toLowerCase()} successfully`,
      appointment: updated,
    });
  } catch (error) {
    console.error('Update Appointment Status Error:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};


const getAppointmentsForPatient = async (req, res) => {
  try {
    const { patientId } = req.params;
    const today = moment().format('YYYY-MM-DD');

    const allAppointments = await Appointment.find({ patient: patientId })
      .populate('doctor', 'fullName email phone specialty workingHours consultingFee photo')
      .sort({ appointmentDate: -1, appointmentTime: -1 });

    const upcoming = allAppointments.filter(a => a.appointmentDate >= today);
    const past = allAppointments.filter(a => a.appointmentDate < today);

    res.status(200).json({
      upcoming,
      past,
    });
  } catch (error) {
    console.error('Get Patient Appointments Error:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};


const updateMedicalRecord = async (req, res) => {
  try {
    const { appointmentId } = req.params;
    const { diagnosis, prescription, notes } = req.body;

    // Check if appointment exists & is completed
    const appointment = await Appointment.findById(appointmentId);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    if (appointment.status !== 'Completed') {
      return res.status(400).json({ message: 'Medical records can only be added to completed appointments.' });
    }

    // Update medicalHistory field
    appointment.medicalHistory = { diagnosis, prescription, notes };
    await appointment.save();

    res.status(200).json({ message: 'Medical history updated successfully.', updated: appointment });
  } catch (error) {
    console.error('Medical History Update Error:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};




module.exports = {
  bookAppointment,
  getAppointmentsForDoctor,
  updateAppointmentStatus,
  getAppointmentsForPatient,
  updateMedicalRecord
};

