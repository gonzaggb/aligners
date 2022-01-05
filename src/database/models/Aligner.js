module.exports = (sequelize, DataTypes) => {
    alias = 'Aligner'
    columns = {
        idAlignerPk: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: DataTypes.ENUM('superior', 'inferior'),
            allowNull: false
        },
        dateOfProduction: {
            type: DataTypes.DATE,
            allowNull: false
        },
        notes: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        idTreatmentFk: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
    config = {
        timestamps: false,
        underscored: true
    }

    const Aligner = sequelize.define(alias, columns, config)

    Aligner.associate = function (models) {
        Aligner.belongsTo(models.Treatment, {
            as: 'treatment',
            foreignKey: 'idTreatmentFk'            
        })
    
    }

    return Aligner
}