
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function (table) {
    table.increments(); //nesse caso vai gerar um numero para cada caso q a ong registrar (1,2,3..)
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable(); //valor é numero float, decimal
  
    table.string('ong_id').notNullable(); //ONG que criou a incidencia, o ID dela, relacionamento
    table.foreign('ong_id').references('id').inTable('ongs'); //não podemos colocar o ID de uma ong na qual nao está cadastrada, então nos refenciamos ao ID da tabela 'ongs'
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
