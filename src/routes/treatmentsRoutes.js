var express = require('express')
var router = express.Router()
const { validateApi } = require('../middleware/treatmentsValidator')
const treatmentController = require('../controllers/treatmentController')
const upload = require('../middleware/treatmentsMulter')
const { validateImageApi } = require('../middleware/imageValidator')


//get all treatments details
router.get('/treatmentDetail', treatmentController.getTreatmentDetails)
//create treatment
router.post('/createTreatment',  upload.any(),validateApi, treatmentController.createTreatment)
//upload images
router.post('/uploadImage/', upload.any(), validateImageApi, treatmentController.uploadImage)
//get treatment list
router.get('/treatmentList/:idUser', treatmentController.getTreatmentList)
module.exports = router;
