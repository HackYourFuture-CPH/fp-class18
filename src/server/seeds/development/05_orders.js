exports.seed = function (knex) {
  return knex('orders')
    .del()
    .then(function () {
      return knex('orders').insert([
        {
          user_id: 1,
          created_at: '2021-09-12 15:00:00',
        },
        {
          user_id: 5,
          created_at: '2021-09-12 12:00:00',
        },
        {
          user_id: 9,
          created_at: '2021-09-12 18:00:00',
        },
        {
          user_id: 1,
          created_at: '2021-10-12 18:00:00',
        },
        {
          user_id: 3,
          created_at: '2021-09-12 21:00:00',
        },
      ]);
    });
};
