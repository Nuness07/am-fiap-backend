exports.up = function (knex) {
  return knex.schema.createTable('tarefas', (table) => {
    table.uuid('id_tarefa').primary();
    table.string('nome', 80).notNullable();
    table.string('descricao', 500).notNullable();
    table.string('data_inicio', 50).notNullable();
    table.string('data_termino', 50);

    table
    .uuid('id_usuario_relation')
    .references('id_usuario')
    .inTable('usuarios')
    .notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('feedbacks');
};
