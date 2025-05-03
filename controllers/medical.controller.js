const Appointment = require('../models/Appointment');

const getPatientMedicalHistory = async (req, res) => {
  try {
    const { patientId } = req.params;

    const completedAppointments = await Appointment.find({
      patient: patientId,
      status: 'Completed',
      medicalHistory: { $exists: true }
    })
      .populate('doctor', 'fullName email phone specialty')
      .sort({ appointmentDate: -1 });

    res.status(200).json({ history: completedAppointments });
  } catch (error) {
    console.error('Get Medical History Error:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};


const getPrescriptionByAppointment = async (req, res) => {
  try {
    const { appointmentId } = req.params;

    const appointment = await Appointment.findById(appointmentId).populate('doctor', 'fullName email phone specialty');

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    if (appointment.status !== 'Completed') {
      return res.status(400).json({ message: 'Prescription is only available after appointment is completed.' });
    }

    if (!appointment.medicalHistory || !appointment.medicalHistory.prescription) {
      return res.status(400).json({ message: 'No prescription found for this appointment.' });
    }

    const { diagnosis, prescription, notes } = appointment.medicalHistory;

    res.status(200).json({
      doctor: appointment.doctor,
      appointmentDate: appointment.appointmentDate,
      diagnosis,
      prescription,
      notes
    });

  } catch (error) {
    console.error('Get Prescription Error:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getPatientMedicalHistory,
  getPrescriptionByAppointment
};
