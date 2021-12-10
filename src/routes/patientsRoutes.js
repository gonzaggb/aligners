var express = require('express');
var router = express.Router();
const { validateApi } = require('../middleware/patientValidator');
const patientController = require('../controllers/patientController');



//create treatment
router.post('/create', validateApi, patientController.createPatient);

module.exports = router;
