/**---IMPORTANDO A CONEXÃO COM O BANCO DE DADOS-- */
const crypto = require('crypto');
const connection = require('../database/connection'); //importando a var que faz conexão com o banco de dados

module.exports = {
    //mostrando as ongs cadastradas
    async index (request,response) { 
        const ongs = await connection('ongs').select('*');
        
        return response.json(ongs);
    },
         //cadastro da ong ---
    async create(request, response) {
      const { name, email, whatsapp, city, uf } = request.body; // dentro tenho todos os dados que coloquei no insominia - coloquei todas essas variaveis para o user não preencher algo q eu n queira
     
      const id = crypto.randomBytes(4).toString('HEX'); //aqui irá criar o ID da ong, vai pegar 4 bits e transformar pra haxadecimal em string
      await connection('ongs').insert({ //await -> esperar esse codigo terminar para então rodr o responde.json //'ongs' tabela que eu qro inserir dados -- insert 'email, id...' é para inserir dados ali dentro
          id,
          name,
          email,
          whatsapp,
          city,
          uf
      })

      return response.json({id}); //aparecer apenas o ID para a ong que está se cadastrando, para conseguir entrar no site
    }
}