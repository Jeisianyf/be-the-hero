const connection = require('../database/connection.js');

module.exports = {
    // ----- Listando todos os incidents ---
    async index(request, response) {
        const { page = 1} = request.query; //pag com incidentes

        const [count] = await connection('incidents').count() //contador de casos

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id') //join -> quando quero usar dados de 2 tabelas diferentes --- vou trazer os dados da tabela de ongs, porém quero que ongs.id seja = incidents.ong_id
            .limit(5) //limite de 5 por pag
            .offset((page - 1)*5) //começar a partir do zero, então vai começar com os 5 primeiros casos
            .select([ //selecionando os dados que gostaria q aparecesse
                'incidents.*', //todos os dados do incident
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);

        response.header('X-Total-Couent', count['count(*)']); //para aparecer no hearder da resposta

        return response.json(incidents);
    },
//--- criando o incidente -----
    async create(request, response) {
        const { title, description, value} = request.body; //para a criação do incident precisa disso
        //request.headers //cabeçalho da requisição, informa qual o ID que está cirnaod esse incident, dados da localização, autenticação -- vai no header lá no insomnia, pra vê qm ta logado, postando ea fins
        const ong_id = request.headers.authorization; //acessar o id da ong -- authorization é oq colocamos no header no insomnia
        
        const [id] = await connection('incidents').insert({ //tabela incidents, inserir esses dados
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id }); //mostrar o id do incidente
    },
//----- deletando incidente ----
    async delete(request, response){ //deletar alguma causa
        const { id } = request.params; //parametro de rota
        const ong_id = request.headers.authorization; //preciso verificar se o ID do incident que está sendo solicitado para deletar, realmente é da ong que está querendo

        const incident = await connection('incidents') //pegar um incident de dentro da tabela de incidents
            .where('id', id) //procurar por id especifico
            .select('ong_id') //selecionar apenas essa coluna
            .first() //retornar apenas um resultado

        if (incident.ong_id != ong_id) {    //se o ong id desse incident for diferente do ong id que está logado
            return response.status(401).json({ error: 'Operation not permitted' }); //vai dar uma resposta de não autorizado
        }

        await connection('incidents').where('id', id).delete(); //deletar do banco de dados

        return response.status(204).send() //204 = refere ao front end que não há conteudo
    }
};