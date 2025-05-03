const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/auth.middleware');
const doctorController = require('../controllers/doctor.controller');
const {
  loginDoctor, getDoctorsBySpecialty, searchDoctors, getPatientMedicalHistory
} = require('../controllers/doctor.controller');
const { getMulterUploader } = require('../middlewares/upload.middleware');
const doctorUpload = getMulterUploader('doctor_docs');

// Route: Register Doctor
router.post(
  '/register',
  doctorUpload.fields([
    { name: 'photo', maxCount: 1 },
    { name: 'degreeDocs', maxCount: 5 },
  ]),
  doctorController.registerDoctor
);

router.post('/login', loginDoctor);

// GET /api/doctors/specialty/:specialty
router.get('/specialty/:specialty', verifyToken(['patient']), getDoctorsBySpecialty);

// GET /api/doctors/search?name=raj&location=mumbai&time=10:00
router.get('/search', verifyToken(['patient']), searchDoctors);

// GET /api/doctors/:doctorId/patients/:patientId/history
router.get('/:doctorId/patients/:patientId/history', verifyToken(['doctor']), getPatientMedicalHistory);

module.exports = router;
