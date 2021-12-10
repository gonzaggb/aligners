const { body } = require('express-validator')
const { Patient } = require('../database/models')

const validateApi = [
body('name').isString().withMessage('El nombre no debe contener números ni caracteres especiales')
.bail().isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres'),
body('lastName').isString().withMessage('El apellido no debe contener números ni caracteres especiales')
.bail().isLength({ min: 3 }).withMessage('El apellido debe tener al menos 3 caracteres'),
body('email').isEmail().withMessage('El email no es válido'),
body('id').isNumeric().withMessage('El DNI debe ser numérico')
.bail()
.custom(async (value, { req }) => {
    const patient = await Patient.findOne({
        where: {
            id: value
        }
    })
    if(patient){
        throw new Error('Ya existe un paciente cargado con ese DNI')
    }
    return true
}),
body('birthday').isDate().withMessage('La fecha de nacimiento no es válida'),
body('mobilephone').isMobilePhone('es-AR').withMessage('El teléfono celular no es válido'),
body('province').isString().withMessage('La provincia no debe contener números ni caracteres especiales')
.bail().isLength({ min: 3 }).withMessage('La provincia debe tener al menos 3 caracteres'),
body('city').isString().withMessage('La ciudad no debe contener números ni caracteres especiales')
.bail().isLength({ min: 3 }).withMessage('La ciudad debe tener al menos 3 caracteres'),
body('occupation').isString().withMessage('La ocupación no debe contener números ni caracteres especiales')
.bail().isLength({ min: 3 }).withMessage('La ocupación debe tener al menos 3 caracteres')
]

module.exports = { validateApi }