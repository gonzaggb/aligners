
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
        idType:{
            type: DataTypes.ENUM('DNI', 'LC', 'LE', 'CI', 'PAIS'),
        },
        id:{
            type: DataTypes.INTEGER,
            allowNull: false
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
			unique: true,
			allowNull: false
		},
		mobilephone: {
			type: DataTypes.INTEGER(10),
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
		}
	}
	const config = {
		tablename: 'patients',
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
    }
	return Patient;
}