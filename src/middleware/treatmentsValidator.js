const { body } = require('express-validator')

const validateApi = [
    
    body('idPatient').notEmpty().withMessage('Debes elegir el paciente al cual cargar el tratamiento'),
    body('atccOption').notEmpty().withMessage('Debes elegir para las condiciones clínicas'),
    body('rmOption').notEmpty().withMessage('Debes elegir para las condiciones clínicas').bail()
        .custom((value, { req }) => {
            if (req.body.rmOption !== 15 && req.body.rmValue === '') {
                throw new Error('Debes seleccionar que dientes no deben moverse')
            }
            return true
        }
        ),
    body('rsOption')
        .custom((value, { req }) => {
            if (req.body.rsOption >= 59 && req.body.rsValue === '') {
                throw new Error('Debes seleccionar seleccionar superior o inferior')
            }
            return true
        }),
    body('lmmcOption')
        .custom((value, { req }) => {
            if (req.body.lmmcOption >= 63 && req.body.lmmcValue === '') {
                throw new Error('Debes seleccionar seleccionar una opcion')
            }
            return true
        }),
    body('misupOptionE').notEmpty().withMessage('Debes elegir una opcion'),
    body('misupOptionP').notEmpty().withMessage('Debes elegir una opcion'),
    body('misupOptionDA').notEmpty().withMessage('Debes elegir una opcion'),
    body('misupOptionDDP').notEmpty().withMessage('Debes elegir una opcion'),
    body('misupOptionDIP').notEmpty().withMessage('Debes elegir una opcion'),
    body('miinfOptionE').notEmpty().withMessage('Debes elegir una opcion'),
    body('miinfOptionP').notEmpty().withMessage('Debes elegir una opcion'),
    body('miinfOptionDA').notEmpty().withMessage('Debes elegir una opcion'),
    body('miinfOptionDDP').notEmpty().withMessage('Debes elegir una opcion'),
    body('miinfOptionDIP').notEmpty().withMessage('Debes elegir una opcion'),
    body('atOption')
        .custom((value, { req }) => {
            if (req.body.atOption >= 102 && req.body.atValue === '') {
                console.log(req.body.atValue)
                throw new Error('Debes seleccionar seleccionar una opcion para 101')
            }
            return true
        })
]

module.exports = { validateApi }