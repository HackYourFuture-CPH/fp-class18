exports.up = function (knex) {
  return knex.schema.createTable('order_items', (table) => {
    table.integer('id').primary();
    table.integer('order_id').notNullable().references('id').inTable('orders');
    table
      .integer('product_id')
      .notNullable()
      .references('id')
      .inTable('products');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('order_items');
};
