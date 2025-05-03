const Appointment = require('../models/Appointment');
const moment = require('moment');

const bookAppointment = async (req, res) => {
  try {
    const {
      doctor,
      patient,
      appointmentDate,
      appointmentTime,
      reason,
    } = req.body;

    // Optional: Check for conflict (same doctor, date & time)
    const existing = await Appointment.findOne({
      doctor,
      appointmentDate,
      appointmentTime,
      status: { $ne: 'Cancelled' }, // Ignore cancelled slots
    });

    if (existing) {
      return res.status(400).json({
        message: 'This timeslot is already booked for the selected doctor.',
      });
    }

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
    res.status(500).json({ message: 'Server Error' });
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

