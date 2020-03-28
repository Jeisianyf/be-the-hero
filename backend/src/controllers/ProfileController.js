const connection = require('../database/connection.js');

// ---- Listando os incidents----
module.exports = {
    async index(request, response) {
        const ong_id = request.headers.authorization; //selecionar a ong

        const incidents = await connection('incidents')//buscar todos os incidesnt da ong selecionada
            .where('ong_id', ong_id) //colocar o id da ong 
            .select('*'); //selecionar todos os incidentes

        return response.json(incidents);
    }
}