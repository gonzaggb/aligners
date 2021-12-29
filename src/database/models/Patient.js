
module.exports = (sequelize, DataTypes) => {
	const alias = 'Patient'
	const columns = {
		idPatientPk: {
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
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
			unique: true
        },
        birthday:{
            type: DataTypes.DATE,
            allowNull: false
        },
        genre:{
            type: DataTypes.ENUM('male','female','other'),
            allowNull: false
        },
		email: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		mobilephone: {
			type: DataTypes.INTEGER(15),
			allowNull: true
		},
		province: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		city: {
			type: DataTypes.STRING(50),
			allowNull: true

		},
        occupation: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		idUserFk: {
			type: DataTypes.STRING(255),
			allowNull: false
		}
	}
	const config = {
		tableName: 'patients',
		timestamps: false,
		underscored: true
	}
	const Patient = sequelize.define(alias, columns, config);
    Patient.associate = function (models) {
        Patient.belongsToMany(models.User, {
            as: 'users',
            through: 'users_patients',
            foreignKey: 'idPatientFk',
            otherKey: 'idUserFk',
            timestamps: false
        })
		Patient.hasMany(models.Treatment, {
			as: 'treatments',
			foreignKey: 'idPatientFk',
			timestamps: false
		})
    }
	return Patient;
}