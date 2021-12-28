const { TreatmentDetail } = require('../database/models');
async function addDetails(idTreatment, option, value) {
    const castedOption = Number(option)

    if (typeof (option) === 'string' && (castedOption === 16 || castedOption === 28 || castedOption == 31 || castedOption === 67)) {
        console.log("#################")
        console.log(castedOption +' '+ option)
        console.log("#################")
        await TreatmentDetail.create({
            idTreatmentFk: idTreatment,
            idDetailFk: option,
            metadata: JSON.stringify(value)
        })
    } else if (typeof (option) === 'string') {
        await TreatmentDetail.create({
            idTreatmentFk: idTreatment,
            idDetailFk: castedOption,
        })
    } else {
        option.forEach(async value => {
            await TreatmentDetail.create({
                idTreatmentFk: idTreatment,
                idDetailFk: Number(value)
            })
        })
    }
}
module.exports = { addDetails }