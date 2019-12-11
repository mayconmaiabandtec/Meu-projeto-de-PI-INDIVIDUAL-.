var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Leitura = require('../models').Leitura;

/* Recuperar as últimas N leituras */
router.get('/ultimas', function(req, res, next) {
	
	// quantas são as últimas leituras que quer? 8 está bom?
	const limite_linhas = 5;

	console.log(`Recuperando as últimas ${limite_linhas} leituras`);
	// const instrucaoSql = `select  top ${limite_linhas} evento as Temp,data_hora from sensor where tipo_sensor='temperatura'; 
	// select  top ${limite_linhas} evento as Umi,data_hora from sensor where tipo_sensor='umidade';`;					

	
	const instrucaoSql = `select top ${limite_linhas} temperatura ,umidade, FORMAT(datahora,'dd/MM/yyyy	 HH:mm:ss')  as datahora  from sensor order by idsensor desc`;
	// const instrucaoSql = `select *from sensor;`;
						


	sequelize.query(instrucaoSql, {
		model: Leitura,
		mapToModel: true 
	  })
	  .then(resultado => {
			console.log(`Encontrados: ${resultado.length}`);
			res.json(resultado);
	  }).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
	  });
});


// tempo real (último valor de cada leitura)
router.get('/tempo-real', function (req, res, next) {
	
	console.log(`Recuperando as últimas leituras`);

	const instrucaoSql = `select top 1 temperatura ,umidade from sensor order by idsensor desc`;

	sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
		.then(resultado => {
			res.json(resultado[0]);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});
  
});


// estatísticas (max, min, média, mediana, quartis etc)
router.get('/estatisticas', function (req, res, next) {
	
	console.log(`Recuperando as estatísticas atuais`);
	const instrucaoSql =`select top 1 trava from sensor;`;
	// const instrucaoSql = `
	// 		select
	// 		(select max(evento) from sensor where tipo_sensor='temperatura') as temp_maxima,
	// 		(select min(evento) from sensor where tipo_sensor='temperatura') as temp_minima,
	// 		(select avg(evento) from sensor where tipo_sensor='temperatura') as temp_media,
	// 		(select max(evento) from sensor where tipo_sensor='umidade') as umidade_maxima,
	// 		(select min(evento) from sensor where tipo_sensor='umidade') as umidade_minima,
	// 		(select avg(evento) from sensor where tipo_sensor='umidade') as umidade_media from sensor
	// 		`;

	sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
		.then(resultado => {
			res.json(resultado[0]);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});
  
});


module.exports = router;
