exports.up = function(knex) { //responsavel pela criação da tabela
  return knex.schema.createTable('ongs', function (table) { //criando nova tabela
    table.string('id').primary() //ID da ong tipo string para não ser tão facil descobrir o ID de outras ong's --- primary = transformar uma coluna em coluna chave
    table.string('name').notNullable(); //campo não pode ser vazio
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  }); 
};

exports.down = function(knex) { //para deletar -- npx knex migrate:rollback
  return knex.schema.dropTable('ongs');
};
