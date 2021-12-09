const { Detail, Treatment, TreatmentDetail } = require('../database/models');
const { validationResult } = require('express-validator');
const { addDetails } = require('../utils/utils.js');
const controller = {

    // api to get details available for a treatment
    getTreatmentDetails: async (req, res) => {
        try {
            const details = await Detail.findAll({ include: [{ association: 'detailValues' }] });
            let response = {
                meta: {
                    status: 200,
                    message: 'Treatment details fetched successfully'
                },
                data: details
            }
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({
                meta: {
                    status: 500,
                    message: 'Internal server error'
                },
                data: {}
            })

        }

    },
    createTreatment: async (req, res) => {
        console.log('accede al create treatment')
        const errors = validationResult(req);
        console.log(errors)
        if (errors.array().length > 0) {
            res.status(422).json({
                meta: {
                    status: 422,
                    message: 'Validation error'
                },
                data: errors.array()
            })
        } else {
            //idPatient // debe salir de la sesion
            const { idPatient, atccOption, ccValue, rmOption, rmValue, raMValue,
                raMRECOption, raMRECMOption, rsrOption, rssOption, rssValue, lmOption, lmValue,
                lmMCPOption, lmASAOption, misupOptionE, misupOptionP, misupOptionDA,
                misupOptionDDP, misupOptionDIP, miinfOptionE, miinfOptionP, miinfOptionDA,
                miinfOptionDDP, miinfOptionDIP, atOption, atValue } = req.body

            try {
                const treatment = await Treatment.create({
                    idPatientFk: Number(idPatient),
                    idTreatmentStatusFk: 1, // 1 = pending
                })
                await addDetails(treatment.idTreatmentPk, atccOption)
                await addDetails(treatment.idTreatmentPk, ccValue)
                await addDetails(treatment.idTreatmentPk, rmOption, rmValue)
                await addDetails(treatment.idTreatmentPk, raMValue)
                await addDetails(treatment.idTreatmentPk, raMRECOption)
                await addDetails(treatment.idTreatmentPk, raMRECMOption)
                await addDetails(treatment.idTreatmentPk, rsrOption)
                await addDetails(treatment.idTreatmentPk, rssOption, rssValue)
                await addDetails(treatment.idTreatmentPk, lmOption, lmValue)
                await addDetails(treatment.idTreatmentPk, lmMCPOption)
                await addDetails(treatment.idTreatmentPk, lmASAOption)
                await addDetails(treatment.idTreatmentPk, misupOptionE)
                await addDetails(treatment.idTreatmentPk, misupOptionP)
                await addDetails(treatment.idTreatmentPk, misupOptionDA)
                await addDetails(treatment.idTreatmentPk, misupOptionDDP)
                await addDetails(treatment.idTreatmentPk, misupOptionDIP)
                await addDetails(treatment.idTreatmentPk, miinfOptionE)
                await addDetails(treatment.idTreatmentPk, miinfOptionP)
                await addDetails(treatment.idTreatmentPk, miinfOptionDA)
                await addDetails(treatment.idTreatmentPk, miinfOptionDDP)
                await addDetails(treatment.idTreatmentPk, miinfOptionDIP)
                await addDetails(treatment.idTreatmentPk, atOption, atValue)



                res.status(200).json({
                    meta: {
                        status: 200,
                        message: 'Treatment created successfully'
                    },
                    data: treatment
                })
            } catch (error) {
                console.log(error)
                res.status(500).json({
                    meta: {
                        status: 500,
                        message: 'Internal server error'
                    },
                    data: {}
                })

            }

        }

    }
}
module.exports = controller
