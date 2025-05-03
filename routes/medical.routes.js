const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/auth.middleware');
const { getPatientMedicalHistory, getPrescriptionByAppointment } = require('../controllers/medical.controller');

// GET /api/medical-history/:patientId
router.get('/:patientId', verifyToken(['patient']), getPatientMedicalHistory);
router.get('/prescription/:appointmentId', verifyToken(['patient']), getPrescriptionByAppointment);

module.exports = router;
