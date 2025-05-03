const mongoose = require('mongoose');

const emergencyRequestSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  reason: {
    type: String,
    required: true
  },
  requestTime: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['Pending', 'On The Way', 'Resolved'],
    default: 'Pending'
  }
});

const EmergencyRequest = mongoose.model('EmergencyRequest', emergencyRequestSchema);
module.exports = EmergencyRequest;
