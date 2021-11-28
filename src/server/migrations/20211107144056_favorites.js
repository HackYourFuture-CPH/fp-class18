exports.up = function (knex) {
  return knex.schema.createTable('favorites', (table) => {
    table.string('user_id').notNullable().references('users.id');
    table
      .integer('product_id')
      .notNullable()
      .unsigned()
      .references('products.id');
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('favorites');
};
