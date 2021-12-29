const multer = require('multer');
const path = require('path');
const { Patient } = require('../database/models');
const { isImage } = require('../utils/isImage');

console.log("entre al multer")
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, `../../public/images/treatments/`))
    },
    //TODO validar si el id viaja en el body
    filename: async (req, file, cb) => {
        console.log(file)
        const patient = await Patient.findOne({
            where: {
                idPatientPk: req.body.id || 1
            }
        })
        const extensionFile = path.extname(file.originalname)
        cb(null, `${patient.name}-${patient.lastName}-${file.fieldname}-${Date.now()}${extensionFile}`)

    }
})

/* const fileFilter = (req, file, cb) => {
    if (isImage(path.extname(file.originalname))) {
        cb(null, true)
    } else {
        cb(null, false)
    }
} */

const upload = multer({ storage, /* fileFilter */ })
module.exports = upload;