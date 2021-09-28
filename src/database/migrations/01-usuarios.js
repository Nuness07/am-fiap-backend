exports.up = function (knex) {
  return knex.schema.createTable('usuarios', (table) => {
    table.uuid('id_usuario').primary();
    table.string('email', 45).notNullable();
    table.string('senha', 45).notNullable();
    table.string('nome', 45).notNullable();
    table.string('sobrenome', 160).notNullable();
    table.string('cpf', 45);
    table.string('foto', 45).notNullable();
    table.string('cargo', 500);
    table.string('data_admissao', 45);
    table.string('salario_atual', 45);
    table.string('salario_anterior', 45);
    table.boolean('is_gerente');
    table.string('localidade_filial', 50);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('usuarios');
};
