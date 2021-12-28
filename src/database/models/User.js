
module.exports = (sequelize, DataTypes) => {
	const alias = 'User'
	const columns = {
		idUserPk: {
			autoIncrement: true,
			primaryKey: true,
            allowNull: false,
			type: DataTypes.INTEGER
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		lastName: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
        professional_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
		email: {
			type: DataTypes.STRING(255),
			unique: true,
			allowNull: false
		},
		mobilephone: {
			type: DataTypes.INTEGER(50),
			allowNull: true
		},
		address: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		rol: {
			type: DataTypes.ENUM('professional', 'admin'),
			allowNull: false
		},
        password: {
			type: DataTypes.STRING(255),
			allowNull: false
		}
	}
	const config = {
		tableName: 'users',
		timestamps: false,
		underscored: true
	}
	const User = sequelize.define(alias, columns, config);
    User.associate = function (models) {
        User.belongsToMany(models.Patient, {
            as: 'patients',
            through: 'users_patients',
            foreignKey: 'idUserFk',
            otherKey: 'idPatientFk',
            timestamps: false
        })
    }
	return User;
}