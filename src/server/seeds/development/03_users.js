exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert([
        {
          full_name: 'Nick Wahlberg',
          email: 'wahl123@nick.com',
          address: 'Enghavevej 21',
          zipcode: '1234',
          city: 'Copenhagen',
          country: 'Denmark',
        },
        {
          full_name: 'Karl Berry',
          email: 'berry23@karl.com',
          address: 'Enghavevej 21 A',
          zipcode: '2265',
          city: 'Copenhagen',
          country: 'Denmark',
        },
        {
          full_name: 'Uma Wood',
          email: 'uma005@wood.com',
          address: 'Dalumvej 12',
          zipcode: '2650',
          city: 'Hvidovre',
          country: 'Denmark',
        },
        {
          full_name: 'Helen Voigt',
          email: 'helen@yahoo.com',
          address: 'Vejlenitsvej 23',
          zipcode: '2665',
          city: 'Vallensbæk',
          country: 'Denmark',
        },
        {
          full_name: 'Jennifer Davis',
          email: 'jendav1@gmail.com',
          address: 'Ishøjgården 1',
          zipcode: '2675',
          city: 'Ishøj',
          country: 'Denmark',
        },
        {
          full_name: 'Pernille Vigsø',
          email: 'pernille23@vigso.com',
          address: 'Vejlegårdsparken 56',
          zipcode: '2345',
          city: 'Odense',
          country: 'Denmark',
        },
        {
          full_name: 'Pia Damsgaard',
          email: 'pia89@yahoo.com',
          address: 'Englandsvej 5 A',
          zipcode: '3434',
          city: 'London',
          country: 'England',
        },
        {
          full_name: 'Felix Thomsen',
          email: 'felix@thomsen.com',
          address: 'Landsbygade 9',
          zipcode: '9878',
          city: 'Aarhus',
          country: 'Denmark',
        },
        {
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
