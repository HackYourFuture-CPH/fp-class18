exports.up = function (knex) {
  return knex.schema.createTable('order_items', (table) => {
    table.integer('id').primary();
    table
      .integer('order_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('orders');
    table
      .integer('product_id')
      .unsirgned()
      .notNullable()
      .references('id')
      .inTable('products');
    table.integer('quantity').defaultTo(1).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('order_items');
};
