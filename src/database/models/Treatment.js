
module.exports = (sequelize, DataTypes) => {
    const alias = 'Treatment'
    const columns = {
        idTreatmentPk: {
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            type: DataTypes.INTEGER
        },
        idTreatmentStatusFk: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idTypeOfTreatmentFk: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idPatientFk: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }
    const config = {
        tablename: 'treatments',
        timestamps: false,
        underscored: true
    }
    const Treatment = sequelize.define(alias, columns, config);
    Treatment.associate = function (models) {
        Treatment.belongsTo(models.Patient, {
            as: 'patient',
            foreignKey: 'idPatientFk',
            timestamps: false
        })
        /*REVISAR RELACION*/
        Treatment.belongsTo(models.TreatmentStatus, {
            as: 'treatmentStatus',
            foreignKey: 'idTreatmentStatusFk',
            timestamps: false
        })
        Treatment.belongsTo(models.TypeOfTreatment, {
            as: 'typeOfTreatment',
            foreignKey: 'idTypeOfTreatmentFk',
            timestamps: false
        })
        Treatment.associate = function (models) {
            Treatment.hasMany(models.Detail, {
                as: 'details',
                through: 'treatment_details',
                foreignKey: 'idTreatmentFk',
                otherKey: 'idDetailFk'
            })
        }
        Treatment.associate = function (models) {
            Treatment.hasMany(models.Image, {
                as: 'images',
                foreignKey: 'idTreatmentFk',
                timestamps: false
            })
        }
    }
    return Treatment;
}