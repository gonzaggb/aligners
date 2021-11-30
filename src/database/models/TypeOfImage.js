module.exports = (sequelize, DataTypes) => {
    alias = 'TypeOfImage'
    columns = {
        idTypeOfImagePk: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false
        }
    }
    config = {
        tableName: 'type_of_image',
        timestamps: false
    }

    const TypeOfImage = sequelize.define(alias, columns, config)

    TypeOfImage.associate = function(models) {
        TypeOfImage.hasMany(models.Image, {
            as: 'images',
            foreignKey: 'idTypeOfImageFk'
        })
    }

    return TypeOfImage
}