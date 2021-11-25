exports.seed = function (knex) {
  return knex('categories')
    .del()
    .then(function () {
      return knex('categories').insert([
        {
          id: 1,
          name: 'Furniture',
          created_at: '2020-05-11 00:00:00',
        },
        {
          id: 2,
          name: 'Lamps',
          created_at: '2020-05-11 00:00:00',
        },
        {
          id: 3,
          name: 'Home decor',
          created_at: '2020-05-11 00:00:00',
        },
        {
          id: 4,
          name: 'Linens',
          created_at: '2020-05-11 00:00:00',
        },
      ]);
    });
};
