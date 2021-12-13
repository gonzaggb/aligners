const { body } = require('express-validator')
const { checkFields } = require('../utils/checkFields')



const validateImageApi = [
    body('extFrente').custom((value, { req }) => {
        const images = req.files
        checkFields(images, 'extFrente')
        return true
    }),
    body('extSonrisa').custom((value, { req }) => {
        const images = req.files
        checkFields(images, 'extSonrisa')
        return true
    }),
    body('extPerfil').custom((value, { req }) => {
        const images = req.files
        checkFields(images, 'extPerfil')
        return true
    }),
    body('intFrente').custom((value, { req }) => {
        const images = req.files
        checkFields(images, 'intFrente')
        return true
    }),
    body('intLateral').custom((value, { req }) => {
        const images = req.files
        checkFields(images, 'intLateral')
        return true
    }),
    body('intOclusal').custom((value, { req }) => {
        const images = req.files
        checkFields(images, 'intOclusal')
        return true
    }),
    body('intOverjet').custom((value, { req }) => {
        const images = req.files
        checkFields(images, 'intOverjet')
        return true
    })
]

module.exports = { validateImageApi }