exports.up = function (knex) {
  return knex.schema.createTable('orders', (table) => {
    table.increments('id').primary();
    table
      .enum('status', ['created', 'confirmed', 'payed'])
      .defaultTo('created')
      .notNullable();
    table.datetime('created_at').defaultTo(knex.fn.now()).notNullable();
    table.string('user_id').unsigned().notNullable();
    table.foreign('user_id').references('users.id');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('orders');
};
