module.exports = (sequelize, DataTypes) => {
    alias = 'Detail'
    columns = {
        idDetailPk: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: DataTypes.STRING(5),
            description: DataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        option: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    }
    config = {
        tableName: 'details',
        timestamps: false,
        underscored: true
    }

    const Detail = sequelize.define(alias, columns, config)

    Detail.associate = function (models) {
        Detail.belongsToMany(models.Treatment, {
            as: 'treatments',
            through: 'treatments_details',
            foreignKey: 'idDetailFk',
            otherKey: 'idTreatmentFk'
        })
    }

    return Detail
}