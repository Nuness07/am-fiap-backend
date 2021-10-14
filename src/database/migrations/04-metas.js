exports.up = function (knex) {
  return knex.schema.createTable('metas', (table) => {
    table.increments('id_usuario').primary();
    table.string('nome', 80).notNullable();
    table.string('descricao', 500).notNullable();
    table.string('data_inicio', 50).notNullable();

    table
    .uuid('id_usuario_relation')
    .references('id_usuario')
    .inTable('usuarios')
    .notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('metas');
};
