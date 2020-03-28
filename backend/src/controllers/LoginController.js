const connection = require('../database/connection.js');

// ---- Sistema de criar sessão (login)------
module.exports = {
    async create(request, response) {
        const { id } = request.body; //vai ser informado o ID da ong

        const ong = await connection('ongs') //quando colocado o ID, vai procurar na tabela ongs:
            .where('id', id)
            .select('name')
            .first()
        
        if (!ong) { //se nenhuma ong for achada com esse ID
            return response.status(400).json({ error: 'No ONG found with this ID '});
        }

        return response.json(ong);
    }
}