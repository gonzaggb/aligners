const { validationResult } = require('express-validator');
const { Patient } = require('../database/models');

const controller = {

    // api to get details available for a treatment
    createPatient: async (req, res) => {
        const errors = validationResult(req);
        const { name, lastName, birthday, genre, email, mobilephone, province, city, occupation, idType, id, idUserFk } = req.body
        if (errors.array().length > 0) {
            return res.json({
                meta: {
                    status: 1,
                    message: 'Errors in form',
                    errors: errors.array().length
                },
                errors: errors.array()
            })
        } else {
            try {
                const patient = await Patient.create({
                    name,
                    lastName,
                    idType,
                    id,
                    birthday,
                    genre,
                    email,
                    mobilephone,
                    province,
                    city,
                    occupation,
                    idUserFk
                })
                res.status(200).json({
                    meta: {
                        status: 200,
                        message: 'Patient created successfully'
                    },
                    data: patient
                })


            } catch (error) {
                res.status(500).json({
                    meta: {
                        status: 500,
                        message: 'Internal server error'
                    }
                })
            }
        }
    }
}
module.exports = controller
