const bcrypt = require('bcryptjs');
const generateToken = require('../utils/jwt.util');

const Admin = require('../models/Admin');
const Doctor = require('../models/Doctor');
const Patient = require('../models/Patient');
const Appointment = require('../models/Appointment');
const EmergencyRequest = require('../models/EmergencyRequest');

// Register Admin
const registerAdmin = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    // Basic check
    const existing = await Admin.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Admin already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new Admin({ name, email, password: hashedPassword, phone });
    await newAdmin.save();

    const { password: _, ...adminWithoutPassword } = newAdmin.toObject();
    res.status(201).json({ message: "Admin registered successfully", admin: adminWithoutPassword });

  } catch (error) {
    console.error("Admin registration error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Login Admin
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    const isPasswordMatch = await bcrypt.compare(password, admin.password);

    if (!admin || !isPasswordMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate token
    const token = generateToken(admin._id, 'admin');

    const { password: _, ...adminWithoutPassword } = admin.toObject();
    res.status(200).json({ message: "Login successful", admin: adminWithoutPassword, token });

  } catch (error) {
    console.error("Admin login error:", error);
    res.status(500).json({ message: "Server error" });
  }
};


// Get all registered doctors
const getAllDoctors = async (req, res) => {
    try {
      const doctors = await Doctor.find().select('-password'); // Hide password field if exists
      res.status(200).json({ message: "Doctors fetched successfully", doctors });
    } catch (error) {
      console.error("Error fetching doctors:", error);
      res.status(500).json({ message: "Server error" });
    }
};


// Get all registered patients
const getAllPatients = async (req, res) => {
    try {
      const patients = await Patient.find().select('-password'); // Hide password field
      res.status(200).json({ message: "Patients fetched successfully", patients });
    } catch (error) {
      console.error("Error fetching patients:", error);
      res.status(500).json({ message: "Server error" });
    }
};


// Get all appointments
const getAllAppointments = async (req, res) => {
    try {
      const appointments = await Appointment.find()
        .populate('doctor', 'name email specialty') // Populate doctor info
        .populate('patient', 'name email phone')     // Populate patient info
        .sort({ createdAt: -1 }); // Latest first
  
      res.status(200).json({
        message: "Appointments fetched successfully",
        appointments
      });
    } catch (error) {
      console.error("Error fetching appointments:", error);
      res.status(500).json({ message: "Server error" });
    }
};


// Update doctor status (approve/reject)
const updateDoctorStatus = async (req, res) => {
    const { doctorId } = req.params;
    const { status } = req.body;
  
    // Validate status value
    const allowedStatuses = ['pending', 'approved', 'rejected'];
    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }
  
    try {
      const doctor = await Doctor.findById(doctorId);
      if (!doctor) {
        return res.status(404).json({ message: "Doctor not found" });
      }
  
      doctor.status = status;
      await doctor.save();
  
      const { password: _, ...doctorWithoutPassword } = doctor.toObject();
      res.status(200).json({
        message: `Doctor status updated to ${status}`,
        doctor: doctorWithoutPassword,
      });

    } catch (error) {
      console.error("Error updating doctor status:", error);
      res.status(500).json({ message: "Server error" });
    }
};


const deleteDoctor = async (req, res) => {
  const { doctorId } = req.params;

  try {
    const doctor = await Doctor.findByIdAndDelete(doctorId);

    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    res.status(200).json({ message: 'Doctor deleted successfully' });
  } catch (error) {
    console.error('Error deleting doctor:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


const getEmergencyRequests = async (req, res) => {
  try {
    const requests = await EmergencyRequest.find()
      .populate('patientName', 'fullName email phone')  // populate patient basic details
      .sort({ createdAt: -1 }); // latest first

    res.status(200).json({
      message: 'Emergency requests fetched successfully',
      requests,
    });
  } catch (error) {
    console.error('Error fetching emergency requests:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


const updateEmergencyRequest = async (req, res) => {
  const { requestId } = req.params;
  const { status } = req.body;

  try {
    const updatedRequest = await EmergencyRequest.findByIdAndUpdate(
      requestId,
      { status },
      { new: true }
    ).populate('patientName', 'fullName email phone');

    if (!updatedRequest) {
      return res.status(404).json({ message: 'Emergency request not found' });
    }

    res.status(200).json({
      message: 'Emergency request updated successfully',
      updatedRequest,
    });
  } catch (error) {
    console.error('Error updating emergency request:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


const getDashboardStats = async (req, res) => {
  try {
    const totalPatients = await Patient.countDocuments();
    const totalDoctors = await Doctor.countDocuments();
    const totalAppointments = await Appointment.countDocuments();
    const totalEmergencyRequests = await EmergencyRequest.countDocuments();

    const pendingEmergencyRequests = await EmergencyRequest.countDocuments({
      status: 'Pending',
    });

    res.status(200).json({
      message: 'Dashboard stats fetched successfully',
      stats: {
        totalPatients,
        totalDoctors,
        totalAppointments,
        totalEmergencyRequests,
        pendingEmergencyRequests,
      },
    });
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  registerAdmin,
  loginAdmin,
  getAllDoctors,
  getAllPatients,
  getAllAppointments,
  updateDoctorStatus,
  deleteDoctor,
  getEmergencyRequests,
  updateEmergencyRequest,
  getDashboardStats
};
