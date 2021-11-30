module.exports = (sequelize, DataTypes) => {
    const alias = 'TreatmentStatus'
    const columns = {
        idTeatmentStatusPk: {
            primary: true,
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
    const config = {
        tableName: 'treatment_status',
        timestamps: false
    }

    const TreatmentStatus = sequelize.define(alias, columns, config)

    TreatmentStatus.associate = function(models) {
        TreatmentStatus.hasMany(models.Treatment, {
            as: 'treatments',
            foreignKey: 'idTreatmentStatusFk'
        })
    }

    return TreatmentStatus
}