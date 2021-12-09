const { TreatmentDetail } = require('../database/models');
async function addDetails(idTreatment, option, optionValue) {
    console.log(option)
    const arrayOptions = option.isArray ? option : option.split(',')
    if (arrayOptions.length > 0) {
        arrayOptions.forEach(async element => {
            await TreatmentDetail.create({
                idTreatmentFk: idTreatment,
                idDetailFk: element,
                metadata: JSON.stringify(optionValue)
            })
        })
    }
}
module.exports = { addDetails }