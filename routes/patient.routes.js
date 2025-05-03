const express = require('express');
const router = express.Router();
const { registerPatient, loginPatient } = require('../controllers/patient.controller');
const { getMulterUploader } = require('../middlewares/upload.middleware');
const patientUpload = getMulterUploader('patient_photos');

// POST /api/patients/register
router.post('/register', patientUpload.single('profilePhoto'), registerPatient);

router.post('/login', loginPatient);

module.exports = router;
