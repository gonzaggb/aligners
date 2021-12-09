const { body } = require('express-validator')

const validateApi = [

    body('idPatient').notEmpty().withMessage('Debes elegir el paciente al cual cargar el tratamiento'),
    body('atccOption').notEmpty().withMessage('Debes elegir cual es la arcada a tratar'),
    body('ccValue').notEmpty().withMessage('Debes elegir cual es la condición clinica'),
    body('raMRECOption').notEmpty().withMessage('Debes elegir cual es la condición clinica'),
    body('raMRECMOption').notEmpty().withMessage('Debes elegir cual es la condición clinica'),
    body('rmOption').notEmpty().withMessage('Debes elegir una opcion').bail()
        .custom((value, { req }) => {
            if (req.body.rmOption == 16 && req.body.rmValue === '') {
                throw new Error('Debes seleccionar que dientes no deben moverse')
            }
            return true
        }
        ),
    body('rssOption')
        .custom((value, { req }) => {
            if (req.body.rssOption == 28 && req.body.rsValue === '') {
                throw new Error('Debes seleccionar seleccionar superior o inferior')
            }
            return true
        }),
    body('lmOption')
        .custom((value, { req }) => {
            if (req.body.lmValue == 31 && req.body.lmValue === '') {
                throw new Error('Debes seleccionar al menos una opcion')
            }
            return true
        }),
    body('lmMCPOption').notEmpty().withMessage('Debes elegir una opcion'),
    body('lmASAOption').notEmpty().withMessage('Debes elegir una opcion'),
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
            if (req.body.atOption == 67 && req.body.atValue === '') {
                console.log(req.body.atValue)
                throw new Error('Debes seleccionar seleccionar una opcion para 101')
            }
            return true
        })
]

module.exports = { validateApi }