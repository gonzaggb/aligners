var express = require('express');
var router = express.Router();
const { validateApi } = require('../middleware/treatmentsValidator');
const treatmentController = require('../controllers/treatmentController');
const upload = require('../middleware/treatmentsMulter');

/* GET home page. */
//get all treatments details
router.get('/treatmentDetail', treatmentController.getTreatmentDetails);
//create treatment
router.post('/createTreatment', validateApi, upload.any(), treatmentController.createTreatment);

module.exports = router;
