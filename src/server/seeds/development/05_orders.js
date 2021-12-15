const { userId } = require('./03_users');

exports.seed = function (knex) {
  return knex('orders')
    .del()
    .then(function () {
      return knex('orders').insert([
        {
          id: 1,
          user_id: userId,
          created_at: '2021-09-12 15:00:00',
          status: 'payed',
        },
        {
          id: 2,
          user_id: userId,
          created_at: '2021-09-12 12:00:00',
          status: 'payed',
        },
        {
          id: 3,
          user_id: userId,
          created_at: '2021-09-12 18:00:00',
          status: 'payed',
        },
        {
          id: 4,
          user_id: userId,
          status: 'confirmed',
          created_at: '2021-11-12 18:00:00',
        },
        {
          id: 5,
          user_id: userId,
          created_at: new Date(),
          status: 'created',
        },
      ]);
    });
};
