const { Detail, Treatment } = require('../database/models');
const controller = {

    // api to get details available for a treatment
    getTreatmentDetails: async (req, res) => {
        try {
            const details = await Detail.findAll()
            let response = {
                meta: {
                    status: 200,
                    message: 'Treatment details fetched successfully'
                },
                data: details
            }
            res.status(200).json(response)
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

    },
    createTreatment: async (req, res) => {
        const { idPatient, status, aatOption, rdmOption, rdmValues, rapMValues, rapMRECValues, rapMRECMValues, rmOption,
            sOption, sValues, lmOption, lmValues, mcpOption, asaOption, miRsExpandirOption, miRsProinclinarOption,
            miRsDIPAnteriorOption, miRsDIPSuperiorOption, miRsDIPIzquierdaOption, miRiExpandirOption, miRiProinclinarOption,
            miRiDIPAnteriorOption, miRiDIPSuperiorOption, miRiDIPIzquierdaOption, aColocarOption, aDientesColocacion } = req.body
        try {
            const treatment = await Treatment.create({
                idPatientFk: Number(idPatient),
                idTreatmentStatusFk: 1,
            })
            console.log(rdmValues)
            treatment.addDetail(rdmValues)
            return res.send(treatment)
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
module.exports = controller
