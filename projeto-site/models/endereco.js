'use strict';


/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Endereco = sequelize.define('Endereco',{	
		idEndereco: {
			field: 'idendereco',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
		rua: {
			field: 'rua',
			type: DataTypes.STRING,
			allowNull: false
		},
		complemento: {
			field: 'complemento',
			type: DataTypes.STRING, // NÃO existe DATETIME. O tipo DATE aqui já tem data e hora
			allowNull: false
		},
		cep: {
			field: 'cep',
			type: DataTypes.STRING,
			allowNull: false
		},
		cidade: {
			field: 'cidade',
			type: DataTypes.STRING, // NÃO existe DATETIME. O tipo DATE aqui já tem data e hora
			allowNull: false
    },
    estado: {
			field: 'estado',
			type: DataTypes.STRING,
			allowNull: false
    },
    numero: {
			field: 'numero',
			type: DataTypes.INTEGER,
			allowNull: false
    },
    fkCliente: {
			field: 'fkCliente',
			type: DataTypes.INTEGER,
			allowNull: false,
			personId: {
				type: DataTypes.INTEGER,
				references: {
					 model: 'cliente', // 'persons' refers to table name
					 key: 'idcliente', // 'id' refers to column name in persons table
				}
		}}
		
		
		
	}, 
	{
		tableName: 'endereco', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Endereco;
};
