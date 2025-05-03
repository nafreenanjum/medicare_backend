const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },

  phone: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  photo: {
    type: String, // Will store URL or file path
    required: true,
  },

  degreeDocs: [
    {
      type: String, // URLs or file paths to documents
      required: true,
    },
  ],

  specialty: {
    type: String,
    required: true,
  },

  workingHours: {
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
  },

  availableDays: {
    type: [String], // e.g. ["Mon", "Tue"]
    required: true,
  },

  experience: {
    type: Number,
    required: true,
  },

  consultationFee: {
    type: Number,
    required: true,
  },

  bio: {
    type: String,
    default: '',
  },

  location: {
    type: String,
    required: true,
  },

  ratings: {
    type: Number,
    default: 0,
  },

  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },

  isVerified: {
    type: Boolean,
    default: false,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Doctor', doctorSchema);
