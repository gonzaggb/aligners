const { Detail } = require('../database/models');
const controller = {

    // api to get details available for a treatment
    getTreatmentDetails: async (req, res) => {
        try {
            const details = await Detail.findAll()
            details.map(detail => {
                detail.option = JSON.parse(detail.option)
            })
            const aat = details.filter(detail => detail.type === 'AAT')
            const cc = details.filter(detail => detail.type === 'CC')
            const rdm = details.filter(detail => detail.type === 'RDM')
            const ra = details.filter(detail => detail.type === 'RA')
            const rm = details.filter(detail => detail.type === 'RM')
            const lm = details.filter(detail => detail.type === 'LM')
            const mcp = details.filter(detail => detail.type === 'MCP')
            const asa = details.filter(detail => detail.type === 'ASA')
            const mi = details.filter(detail => detail.type === 'MI')
            const at = details.filter(detail => detail.type === 'AT')
    
            
            let response = {
                meta: {
                    status: 200,
                    message: 'Treatment details fetched successfully'
                },
                data: {aat, cc, rdm, ra, rm, lm, mcp, asa, mi, at}
    
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
        
    }
}
module.exports = controller
