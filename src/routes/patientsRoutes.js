var express = require('express');
var router = express.Router();
const { validateApi } = require('../middleware/treatmentsValidator');
const patientController = require('../controllers/patientController');
const upload = require('../middleware/treatmentsMulter');



//create treatment
router.post('/create', patientController.createPatient);

module.exports = router;
