exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.string('id').primary().unique().notNullable();
    table.string('address');
    table.string('zipcode');
    table.string('city');
    table.string('country');
    table.datetime('created_at').defaultTo(knex.fn.now()).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
