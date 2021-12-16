var express = require('express');
var router = express.Router();
const { validateApi } = require('../middleware/patientValidator');
const patientController = require('../controllers/patientController');


//get all patients
router.get('/getAllPatients/:idUser', patientController.getAllPatients);
//get patient by id
router.get('/getPatientById/:idPatient', patientController.getPatientById);
//create treatment
router.post('/create', validateApi, patientController.createPatient);

module.exports = router;
