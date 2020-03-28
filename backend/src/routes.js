const express = require("express");

const OngController = require('./controllers/OngController.js'); //importar o arquivo responsável pelo cadastro de ongs
const incidentController = require('./controllers/incidentController.js');
const ProfileController = require('./controllers/ProfileController.js');
const LoginController = require('./controllers/LoginController.js');

const routes = express.Router(); //colocando uma nova variavel as rotas do express

/** --------------------mostras as ongs cadastradas ------------------
routes.get('/ongs', async (request,response) => { 
    const ongs = await connection('ongs').select('*'); //esperar as ongd e selecionar todas cadastradas

    return response.json(ongs);
})--------isso foi para o arquivo OngController.js---------- */

/*no insominia precisa está de acorodo com o digitado aq em baixo*/

//routes.post("/ongs", async (request, response) => { //criando a rota, depois da barra é o recurso // request > guarda os dados\ response > retorna uma resposta pela requisição
    //return response.send("Hello World"); //enviando uma resposta pro cliente, nesse caso, hello world
// ---------------------------------
    /**  -QUERY-
    *  const params = request.query; // para aparecer oq ta sendo requisitado pelo query params, a requisição está sendo feita no insominia (http://localhost:3333/users?name=Jeisiany)
    * 
    *   -ROUTE- 
      const params = request.params; //precisa ter o /users/:id
       
      -BODY-
      const body = request.body;
      */
     

   //console.log(data); // para aparecer no terminal oq está sendo requisitadp
       /**  evento: 'Semana Oministack 11',
        aluno: 'Diego Fernandes'
    }) //nesse caso foram informações de algum user  */

routes.post('/login', LoginController.create) //rota do login

routes.get('/ongs', OngController.index); //ao inves de usar o code lá de cima para mostrar as ongs cadastradas,apenas bubstituo pelo arquivo que já tras isso
routes.post('/ongs', OngController.create); //ao inves de usar o asyn (request, response) eu apenos subtituo pelo arquivo que já trás isso tudo

routes.get('/profile', ProfileController.index);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete); //deletar alguma causa



module.exports = routes // exportar uma variavel, para q o index possa acessar
