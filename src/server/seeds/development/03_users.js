require('dotenv').config({ path: '../../.env' });

exports.userId = process.env.TEST_USER_UID;

exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert([
        {
          id: process.env.TEST_USER_UID,
          address: 'Enghavevej 21',
          zipcode: '1234',
          city: 'Copenhagen',
          country: 'Denmark',
          created_at: '2021-11-21 00:00:00',
        },
      ]);
    });
};
