'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Leitura = sequelize.define('Leitura',{	
		idSensor: {
			field: 'idsensor',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
		
		fkEstufa: {
			field: 'fkEstufa',
			type: DataTypes.INTEGER, // NÃO existe DATETIME. O tipo DATE aqui já tem data e hora
			allowNull: false
		},
		temperatura: {
			field: 'temperatura',
			type: DataTypes.REAL,
			allowNull: false
		},
		umidade: {
			field: 'umidade',
			type: DataTypes.REAL,
			allowNull: false
		},
		dataHora: {
			field: 'datahora',
			type: DataTypes.DATE, // NÃO existe DATETIME. O tipo DATE aqui já tem data e hora
			allowNull: false
		},
		
		
		
	}, 
	{
		tableName: 'sensor', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Leitura;
};
