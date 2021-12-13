const { values } = require("sequelize/dist/lib/operators")
const { isImage } = require("./isImage")
const path = require("path")
const IMAGES_TYPE = ['extFrente', 'extSonrisa', 'extPerfil', 'intFrente', 'intLateral', 'intOclusal', 'intOverjet']

function checkFields(array, field) {
    let valuesFieldName = []
    array.forEach(element => {
        if(element.fieldname === field) {
            valuesFieldName.push(element.fieldname)
        if(!isImage(path.extname(element.originalname))) {
            throw new Error(`El archivo ${element.originalname} no es una imagen`)
        }
    }
    })
    if(valuesFieldName.length === 0) {
        throw new Error(`Debes seleccionar al menos una imagen`)
    }
    return true

            
}


module.exports = { checkFields }