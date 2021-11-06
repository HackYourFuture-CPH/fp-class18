exports.up = function (knex) {
  return knex.schema.createTable('products', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.decimal('price').notNullable();
    table
      .enum('color', ['red', 'green', 'blue', 'yellow', 'white', 'black'])
      .notNullable();
    table
      .enum('size', ['small', 'medium', 'large', 'extra-large', 'doubleXL'])
      .notNullable();
    table
      .enum('status', ['out_of_stock', 'in_stock', 'running_low'])
      .notNullable();
    table.datetime('created_at').defaultTo(knex.fn.now()).notNullable();
    table.binary('picture').notNullable();
    table.integer('stock_amount').notNullable();
    table
      .integer('category_id')
      .unsigned()
      .references('id')
      .inTable('categories')
      .notNullable()
      .onDelete('CASCADE')
      .index();
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('products');
};
