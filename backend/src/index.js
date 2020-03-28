const express = require("express"); //importando o modulo express atraves da variavel express
const cors = require('cors'); //O cors é uma aplicação pra proteger o back-end e escolher quem terá acesso
const routes = require("./routes.js") //importando a variavel routes 

const app = express(); //variavel que armazena minha aplicação, na qual vai rotas

app.use(cors());
  /*origin: 'http://meusite.com'  -- caso eu quisesse dá acesso pra tal hospedagem
}));*/

app.use(express.json()); //informando q esterei usando json na aplicação, para transformar o json do insominia para um arquivo entendivel pela aplicação
app.use(routes);
/** Metodos HTTP
 * 
 * GET: Buscar uma info do back-end (dados de usuario, listagem, no navegador sempre está sendo utilizada essa, pois vc está requeirindo uma pag do server)
 * POST: Criar uma info no back-end (cria um novo usuário)
 * PUT: Alterar uma info no back-end 
 * DELETE: Deletar uma informação no back-end
 */

 /** Tipos de parâmetros
  * 
  * Query Params: Parâmetros nomeados na rota após o simbolo de "?", servem para filtros, paginação {usados com GET} (localhost:3333/users?page=2&nome=Jeisiany)
    Route Params: Parâmetro utilizados para identificar recursos, listar o user especifico (localhost:3333/users/:id)
    Request Body: Corpo da requisição, utilizado para criar ou alterar recursos (senha, email) {usado com POST e em formato JSON}
  */

  /** Banco de dados:
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server >> formato para se comunicar com o banco de dados
   * NoSQL: MongoDB, CouchDB...
   */

   /** Como confiugrar o banco de dados:
    * Se instalar os Drivers -> SELECT * FROM users (buscar todos os users)
    * Query Builder (utiliza o js) --> table("users").select("*").where() --- pode acietar qualqier SQL
    */

 
app.listen(3333); //cria o appp, ent tem q criar uma rota - localhost:3333