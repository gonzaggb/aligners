const { Detail, Treatment, } = require('../database/models');
const { validationResult } = require('express-validator');
const { addDetails } = require('../treatmentUtils/addDetails');
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
        if (errors) {
            res.status(422).json({
                meta: {
                    status: 422,
                    message: 'Validation error'
                },
                data: errors.array()
            })
        } else {
            //idPatient // debe salir de la sesion
            const { idPatient, atccOption, rmOption, rmValue, rsOption, rsValue, lmmcOption,
                lmmcValue, misupOptionE, misupOptionP, misupOptionDA, misupOptionDDP, misupOptionDIP,
                miinfOptionE, miinfOptionP, miinfOptionDA, miinfOptionDDP, miinfOptionDIP, atOption, atValue } = req.body
            try {
                const treatment = await Treatment.create({
                    idPatientFk: Number(idPatient),
                    idTreatmentStatusFk: 1, // 1 = default
                })
                addDetails(atccOption, rmOption, rmValue, rsOption, rsValue, lmmcOption,
                    lmmcValue, misupOptionE, misupOptionP, misupOptionDA, misupOptionDDP, misupOptionDIP,
                    miinfOptionE, miinfOptionP, miinfOptionDA, miinfOptionDDP, miinfOptionDIP, atOption, atValue)
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
