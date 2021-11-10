exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('full_name').notNullable();
    table.string('email').notNullable();
    table.string('address').notNullable();
    table.string('zipcode').notNullable();
    table.string('city').notNullable();
    table.string('country').notNullable();
    table.datetime('created_at').defaultTo(knex.fn.now()).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
