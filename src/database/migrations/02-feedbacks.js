exports.up = function (knex) {
  return knex.schema.createTable('feedbacks', (table) => {
    table.uuid('id_feedback').primary();
    table.string('nivel_feedback', 5).notNullable();
    table.string('assunto', 200).notNullable();
    table.string('feedback', 2000).notNullable();

    table
    .uuid('id_usuario_enviou')
    .references('id_usuario')
    .inTable('usuarios')
    .notNullable();

    table
    .uuid('id_usuario_recebeu')
    .references('id_usuario')
    .inTable('usuarios')
    .notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('feedbacks');
};
