exports.up = function (knex) {
  return knex.schema.table('modules', (table) => {
    table.string('users');
  });
};

exports.down = function (knex) {
  return knex.schema.table('modules', (table) => {
    table.dropColumn('users');
  });
};
