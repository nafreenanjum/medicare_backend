const bcrypt = require('bcryptjs');
const generateToken = require('../utils/jwt.util');

const Patient = require('../models/Patient');

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

    // Check if email already registered
    const existingPatient = await Patient.findOne({ email });
    if (existingPatient) {
      return res.status(400).json({ message: 'Patient already registered with this email' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newPatient = new Patient({
      fullName,
      email,
      phone,
      password: hashedPassword, // 🔓 storing as plain text temporarily
      dateOfBirth,
      gender,
      address,
      profilePhoto: req.file ? req.file.path : null,
    });

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


const loginPatient = async (req, res) => {
  const { email, password } = req.body;

  try {
    const patient = await Patient.findOne({ email });

    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    const isMatch = await bcrypt.compare(password, patient.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(patient._id, 'patient');

    res.status(200).json({
      message: 'Login successful',
      patient: {
        _id: patient._id,
        name: patient.fullName,
        email: patient.email,
      },
      token
    });
  } catch (error) {
    console.error('Patient login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { registerPatient, loginPatient };
