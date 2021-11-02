exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          full_name: 'Semih AYYILDIZ',
          email: 'semihayyildiz23@hotmail.com',
          address: 'Soro',
          zipcode: '4180',
          city: 'Soro',
          country: 'Denmark',
        },
        {
          id: 2,
          full_name: 'User1',
          email: 'user1@outlook.com',
          address: 'Copenhagen',
          zipcode: '1050',
          city: 'Copenhagen',
          country: 'Denmark',
        },
        {
          id: 3,
          full_name: 'User2',
          email: 'user2@outlook.com',
          address: 'Hillerod',
          zipcode: '3400',
          city: 'Hillerod',
          country: 'Denmark',
        },
      ]);
    });
};
