exports.seed = function (knex) {
  return knex('favorites')
    .del()
    .then(function () {
      return knex('favorites').insert([
        {
          user_id: 1,
          product_id: 1,
          created_at: '2021-11-21 00:00:00',
        },
        {
          user_id: 1,
          product_id: 5,
          created_at: '2021-11-20 00:00:00',
        },
        {
          user_id: 3,
          product_id: 8,
          created_at: '2021-05-11 10:10:45',
        },
        {
          user_id: 8,
          product_id: 2,
          created_at: '2021-11-19 00:00:00',
        },
        {
          user_id: 8,
          product_id: 5,
          created_at: '2021-11-18 00:00:00',
        },
        {
          user_id: 9,
          product_id: 10,
          created_at: '2021-11-17 00:00:00',
        },
        {
          user_id: 9,
          product_id: 12,
          created_at: '2021-11-16 00:00:00',
        },
        {
          user_id: 2,
          product_id: 7,
          created_at: '2021-11-11 11:11:11',
        },
      ]);
    });
};
