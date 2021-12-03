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
            allowNull: false
        },
        tab: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        section: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        checkbox: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        input: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
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
            otherKey: 'idTreatmentFk',
            timestamps: false
        })

    }

    return Detail
}