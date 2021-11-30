var express = require('express');
var router = express.Router();
const treatmentController = require('../controllers/treatmentController');

/* GET home page. */
router.get('/treatmentDetail', treatmentController.getTreatmentDetails);


module.exports = router;
