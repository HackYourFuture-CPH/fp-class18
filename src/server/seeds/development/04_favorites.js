exports.seed = function (knex) {
  return knex('favorites')
    .del()
    .then(function () {
      return knex('favorites').insert([
        {
          user_id: 1,
          product_id: 1,
        },
        {
          user_id: 1,
          product_id: 5,
        },
        {
          user_id: 3,
          product_id: 8,
          created_at: '2021-05-11 10:10:45',
        },
        {
          user_id: 8,
          product_id: 2,
        },
        {
          user_id: 8,
          product_id: 5,
        },
        {
          user_id: 9,
          product_id: 10,
        },
        {
          user_id: 9,
          product_id: 12,
        },
        {
          user_id: 2,
          product_id: 7,
          created_at: '2021-11-11 11:11:11',
        },
      ]);
    });
};
