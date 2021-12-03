module.exports = (sequelize, DataTypes) => {
    alias = 'DetailValue'
    columns = {
        idDetailValuePk: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: DataTypes.STRING(5),
            allowNull: false
        },
        input: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        idDetailFk: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
    config = {
        tableName: 'details_values',
        timestamps: false,
        underscored: true
    }

    const DetailValue = sequelize.define(alias, columns, config)

    DetailValue.associate = function (models) {
        DetailValue.belongsTo(models.Detail, {
            as: 'detail',
            foreignKey: 'idDetailFk',
            timestamps: false
        })
    }

    return DetailValue
}