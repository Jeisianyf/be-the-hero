const knex = require('knex'); //importando o knex
const configuration = require('../../knexfile'); //importando as configurações do banco de dados

const connection = knex(configuration.development); //coneção com o banco de dados

module.exports = connection; //exportando o arquivo para fazer a conexão do banco de dados com o routes, para criar o ID