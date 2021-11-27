exports.up = function (knex) {
  return knex.schema.table('order_items', (table) => {
    table.increments('id').primary();
  });
};

exports.down = function (knex) {
  return knex.schema.table('order_items', (table) => {
    table.dropColumn('id');
  });
};
