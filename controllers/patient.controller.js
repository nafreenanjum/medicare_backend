const bcrypt = require('bcryptjs');
const generateToken = require('../utils/jwt.util');
const Patient = require('../models/Patient');

// Register a new patient
const registerPatient = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      password,
      dateOfBirth,
      gender,
      address,
    } = req.body;

    // Check if email is already registered
    const existingPatient = await Patient.findOne({ email });
    if (existingPatient) {
      return res.status(400).json({ message: 'Patient already registered with this email' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new patient object
    const newPatient = new Patient({
      fullName,
      email,
      phone,
      password: hashedPassword, // Store hashed password
      dateOfBirth,
      gender,
      address,
      profilePhoto: req.file ? req.file.path : null, // Optional profile photo
    });

    // Save the patient to the database
    await newPatient.save();

    res.status(201).json({
      message: 'Patient registered successfully',
      patientId: newPatient._id,
    });
  } catch (error) {
    console.error('Patient Registration Error:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Login a patient
const loginPatient = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find patient by email
    const patient = await Patient.findOne({ email });
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, patient.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = generateToken(patient._id, 'patient');

    res.status(200).json({
      message: 'Login successful',
      patient: {
        _id: patient._id,
        name: patient.fullName,
        email: patient.email,
      },
      token,
    });
  } catch (error) {
    console.error('Patient login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get logged-in patient details
const getLoggedInPatient = async (req, res) => {
  try {
    // Fetch patient details using the ID from JWT token
    const patient = await Patient.findById(req.user.id).select('-password');
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    res.status(200).json({
      _id: patient._id,
      name: patient.fullName,
      email: patient.email,
      phone: patient.phone,
      dateOfBirth: patient.dateOfBirth,
      gender: patient.gender,
      address: patient.address,
      profilePhoto: patient.profilePhoto,
    });
  } catch (err) {
    console.error('Error fetching logged-in patient:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Export functions for use in routes
module.exports = {
  registerPatient,
  loginPatient,
  getLoggedInPatient,
};
