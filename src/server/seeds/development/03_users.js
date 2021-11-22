exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert([
        {
          id: 1,
          full_name: 'Nick Wahlberg',
          email: 'wahl123@nick.com',
          address: 'Enghavevej 21',
          zipcode: '1234',
          city: 'Copenhagen',
          country: 'Denmark',
        },
        {
          id: 2,
          full_name: 'Karl Berry',
          email: 'berry23@karl.com',
          address: 'Enghavevej 21 A',
          zipcode: '2265',
          city: 'Copenhagen',
          country: 'Denmark',
        },
        {
          id: 3,
          full_name: 'Uma Wood',
          email: 'uma005@wood.com',
          address: 'Dalumvej 12',
          zipcode: '2650',
          city: 'Hvidovre',
          country: 'Denmark',
        },
        {
          id: 4,
          full_name: 'Helen Voigt',
          email: 'helen@yahoo.com',
          address: 'Vejlenitsvej 23',
          zipcode: '2665',
          city: 'Vallensbæk',
          country: 'Denmark',
        },
        {
          id: 5,
          full_name: 'Jennifer Davis',
          email: 'jendav1@gmail.com',
          address: 'Ishøjgården 1',
          zipcode: '2675',
          city: 'Ishøj',
          country: 'Denmark',
        },
        {
          id: 6,
          full_name: 'Pernille Vigsø',
          email: 'pernille23@vigso.com',
          address: 'Vejlegårdsparken 56',
          zipcode: '2345',
          city: 'Odense',
          country: 'Denmark',
        },
        {
          id: 7,
          full_name: 'Pia Damsgaard',
          email: 'pia89@yahoo.com',
          address: 'Englandsvej 5 A',
          zipcode: '3434',
          city: 'London',
          country: 'England',
        },
        {
          id: 8,
          full_name: 'Felix Thomsen',
          email: 'felix@thomsen.com',
          address: 'Landsbygade 9',
          zipcode: '9878',
          city: 'Aarhus',
          country: 'Denmark',
        },
        {
          id: 9,
          full_name: 'Maria Pavel',
          email: 'mariapavel34@maria.com',
          address: 'Peterbangsvej ',
          zipcode: '3211',
          city: 'Copenhagen',
          country: 'Denmark',
        },
      ]);
    });
};
