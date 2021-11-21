exports.seed = function (knex) {
  return knex('orders')
    .del()
    .then(function () {
      return knex('orders').insert([
        {
          id: 1,
          user_id: 1,
          created_at: '2021-09-12 15:00:00',
          status: 'payed',
        },
        {
          id: 2,
          user_id: 5,
          created_at: '2021-09-12 12:00:00',
          status: 'payed',
        },
        {
          id: 3,
          user_id: 9,
          created_at: '2021-09-12 18:00:00',
          status: 'payed',
        },
        {
          id: 4,
          user_id: 1,
          created_at: '2021-11-12 18:00:00',
        },
        {
          id: 5,
          user_id: 3,
          created_at: '2021-10-12 21:00:00',
          status: 'confirmed',
        },
        {
          id: 6,
          user_id: 9,
          created_at: '2021-11-10 21:00:00',
        },
        {
          id: 7,
          user_id: 3,
          created_at: '2021-09-12 21:00:00',
        },
      ]);
    });
};
