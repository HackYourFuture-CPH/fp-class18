exports.up = function (knex) {
  return knex.schema.createTable('orders', (table) => {
    table.increments('id').primary();
    table.enum('status', ['created', 'confirmed', 'payed']).notNullable();
    table.string('created_at').notNullable();
    table.string('user_id').notNullable();
    table.foreign('user_id').references('users.id');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('orders');
};
