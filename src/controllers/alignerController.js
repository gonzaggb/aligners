const {Aligner} = require('../database/models');
const controller = {
getAlignersbyPatientId: async (req, res) => {
    const { idPatient } = req.params;
    try {
        const aligners = await Aligner.findAll({
            where: {
                idPatientFk: idPatient
            }
        })
        if(aligners){
        return res.status(200).json({
            meta: {
                status: 200,
                message: 'Success',
                aligners: aligners.length,
                upAligners: aligners.filter(aligner => aligner.type ===  'superior').length,
                downAligners: aligners.filter(aligner => aligner.type ===  'inferior').length
            },
            data: aligners
        })}else{
            return res.status(404).json({
                meta: {
                    status: 404,
                    message: 'Aligners not found'
                }
            })
        }
    } catch (error) {
        return res.status(500).json({
            meta: {
                status: 500,
                message: 'Internal Server Error'
            },
            data: error
        })
    }
}
}
module.exports = controller