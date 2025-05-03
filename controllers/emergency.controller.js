const EmergencyRequest = require('../models/EmergencyRequest');

const createEmergencyRequest = async (req, res) => {
  try {
    const { patientName, phone, location, reason } = req.body;

    if (!patientName || !phone || !location || !reason) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const newRequest = new EmergencyRequest({
      patientName,
      phone,
      location,
      reason
    });

    await newRequest.save();
    res.status(201).json({ message: 'Emergency request submitted successfully.', request: newRequest });

  } catch (error) {
    console.error('Emergency Request Error:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  createEmergencyRequest
};
