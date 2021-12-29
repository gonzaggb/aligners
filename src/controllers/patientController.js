const { validationResult } = require('express-validator');
const { Patient } = require('../database/models');

const controller = {
    getPatientById: async (req, res) => {
        const { idPatient } = req.params;
        try {
            const patient = await Patient.findByPk(idPatient);
            if (!patient) {
                return res.status(404).json({
                    message: 'Patient not found'
                });
            }
            return res.status(200).json({
                meta: {
                    response: 'Patient found',
                },
                data: patient

            })
        } catch (error) {
            return res.status(500).json({
                message: 'Internal server error'
            });
        }
    },
    getAllPatients: async (req, res) => {
        try {
            const patients = await Patient.findAll({
                include: [{ association: 'treatments' }]
            })
            return res.status(200).json({
                meta: {
                    status: 200,
                    message: 'Success',
                    patients: patients.length
                },
                data: patients
            })
        } catch (error) {
            return res.status(500).json({
                meta: {
                    status: 500,
                    message: 'Internal Server Error'
                },
                data: error
            })
        }
    },

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
                console.log(error)
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
