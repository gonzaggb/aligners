var express = require('express');
var router = express.Router();
const treatmentController = require('../controllers/treatmentController');

/* GET home page. */
//get all treatments details
router.get('/treatmentDetail', treatmentController.getTreatmentDetails);
//create treatment
router.post('/createTreatment', treatmentController.createTreatment);

module.exports = router;
