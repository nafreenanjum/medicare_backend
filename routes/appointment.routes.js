// const express = require('express');
// const router = express.Router();
// const verifyToken = require('../middlewares/auth.middleware');
// const { bookAppointment, getAppointmentsForDoctor, updateAppointmentStatus, getAppointmentsForPatient, updateMedicalRecord } = require('../controllers/appointment.controller');

// router.post('/book', verifyToken(['patient']), bookAppointment);
// router.get('/doctor/:doctorId', verifyToken(['doctor']), getAppointmentsForDoctor);
// router.patch('/update-status/:appointmentId', verifyToken(['doctor']), updateAppointmentStatus);
// router.get('/patient/:patientId', verifyToken(['patient']), getAppointmentsForPatient);
// router.put('/medical-record/:appointmentId', verifyToken(['doctor']), updateMedicalRecord);

// module.exports = router;


const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/auth.middleware');
const { bookAppointment, getAppointmentsForDoctor, updateAppointmentStatus, getAppointmentsForPatient, updateMedicalRecord } = require('../controllers/appointment.controller');

router.post('/book', verifyToken(['patient']), bookAppointment);
router.get('/doctor/:doctorId', verifyToken(['doctor']), getAppointmentsForDoctor);
router.patch('/update-status/:appointmentId', verifyToken(['doctor']), updateAppointmentStatus);
router.get('/patient/:patientId', verifyToken(['patient']), getAppointmentsForPatient); // No change needed if you're using patientId in URL
router.put('/medical-record/:appointmentId', verifyToken(['doctor']), updateMedicalRecord);

module.exports = router;
