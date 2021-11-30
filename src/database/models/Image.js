module.exports = (sequelize, DataTypes) => {
    alias='Image'
    columns={
        idImagePk: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        idTypeOfImageFk: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idTreatmentFk: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
    config={
        tableName: 'images',
        timestamps: false,
        underscored: true
    }
    const Image = sequelize.define(alias, columns, config)

    Image.associate = function(models){
        /* Image.belongsTo(models.TypeOfImage, {
            as: 'typeOfImage',
            foreignKey: 'idTypeOfImageFk'
        }) */
        Image.belongsTo(models.Treatment, {
            as: 'treatment',
            foreignKey: 'idTreatmentFk'
        })
    }

    return Image
}