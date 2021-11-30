module.exports = (sequelize, DataTypes) => {
    const alias = 'TypeOfTreatment'
    const columne = {
        idTypeOfTreatmentPk: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    }
    const config = {
        tableName: 'type_of_treatment',
        timestamps: false
    }

    const TypeOfTreatment = sequelize.define(alias, columne, config)

    TypeOfTreatment.associate = function(models) {
        TypeOfTreatment.hasMany(models.Treatment, {
            as: 'treatment',
            foreignKey: 'idTypeOfTreatmentFk'
        })
    }

    return TypeOfTreatment
}