
module.exports = (sequelize, DataTypes) => {
    const alias = 'TreatmentDetail'
    const columns = {
        idTreatmentDetailPk: {
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            type: DataTypes.INTEGER
        },
        idTreatmentFk: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        idDetailFk: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        metadata:{
            type: DataTypes.STRING,
            allowNull: true,
        }
    }
    const config = {
        tableName: 'treatments_details',
        timestamps: false,
        underscored: true,
        
    }
    const TreatmentDetail = sequelize.define(alias, columns, config);
    TreatmentDetail.associate = function (models) {
        TreatmentDetail.belongsTo(models.Treatment, {
            as: 'treatment',
            foreignKey: 'idTreatmentFk'
        })        
    }
    return TreatmentDetail;
}
