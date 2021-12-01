exports.up = function (knex) {
  return knex.schema.createTable('favorites', (table) => {
    table.string('user_id').notNullable();
    table
      .integer('product_id')
      .notNullable()
      .unsigned()
      .references('products.id');
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    table.foreign('user_id').references('users.id');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('favorites');
};
