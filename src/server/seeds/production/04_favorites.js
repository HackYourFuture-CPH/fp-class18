const { userId } = require('./03_users');

exports.seed = function (knex) {
  return knex('favorites')
    .del()
    .then(function () {
      return knex('favorites').insert([
        {
          user_id: userId,
          product_id: 1,
          created_at: '2021-11-21 00:00:00',
        },
        {
          user_id: userId,
          product_id: 5,
          created_at: '2021-11-20 00:00:00',
        },
        {
          user_id: userId,
          product_id: 8,
          created_at: '2021-05-11 10:10:45',
        },
        {
          user_id: userId,
          product_id: 12,
          created_at: '2021-11-16 00:00:00',
        },
        {
          user_id: userId,
          product_id: 7,
          created_at: '2021-11-11 11:11:11',
        },
      ]);
    });
};
