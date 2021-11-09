exports.seed = function (knex) {
  return knex('categories')
    .del()
    .then(() => {
      return knex('products').del();
    })
    .then(() => {
      return knex('categories').insert([
        {
          id: 1,
          name: 'Furniture',
          created_at: '2020-05-11 00:00:00',
        },
        {
          id: 2,
          name: 'Lamps',
          created_at: '2020-05-11 00:00:00',
        },
        {
          id: 3,
          name: 'Home decor',
          created_at: '2020-05-11 00:00:00',
        },
        {
          name: 'Linens',
          created_at: '2020-05-11 00:00:00',
        },
      ]);
    })
    .then(() => {
      return knex('products').insert([
        {
          name: 'Ceramic pot',
          price: 50,
          picture: 'src/client/assets/images/image01.png',
          stock_amount: 20,
          category_id: 3,
        },
        {
          name: 'Table lamp',
          price: 150,
          color: 'white',
          picture: 'src/client/assets/images/image02.png',
          stock_amount: 58,
          category_id: 2,
        },
        {
          name: 'Ceramic pottery',
          price: 120,
          color: 'blue',
          picture: 'src/client/assets/images/image03.png',
          stock_amount: 140,
          category_id: 3,
        },
        {
          name: 'Picture frame',
          price: 80,
          color: 'white',
          picture: 'src/client/assets/images/image04.png',
          stock_amount: 2,
          category_id: 3,
        },
        {
          name: 'Pillow case',
          price: 65,
          color: 'white',
          picture: 'src/client/assets/images/image05.png',
          stock_amount: 2,
          category_id: 4,
        },
        {
          name: 'Knitted plaid',
          price: 80,
          picture: 'src/client/assets/images/image06.png',
          stock_amount: 134,
          category_id: 4,
        },
        {
          name: 'Mirror diamonds',
          price: 520,
          picture: 'src/client/assets/images/image07.png',
          stock_amount: 12,
          category_id: 3,
        },
        {
          name: 'Ceramic candliers',
          price: 150,
          picture: 'src/client/assets/images/image08.png',
          stock_amount: 321,
          category_id: 3,
        },
        {
          name: 'Retro chair',
          price: 850,
          picture: 'src/client/assets/images/image09.png',
          stock_amount: 7,
          category_id: 1,
        },
        {
          name: 'Modern table lamp',
          price: 430,
          color: 'black',
          picture: 'src/client/assets/images/image10.png',
          stock_amount: 12,
          category_id: 3,
        },
        {
          name: 'Silk pillow case',
          price: 120,
          color: 'black',
          picture: 'src/client/assets/images/image11.png',
          stock_amount: 12,
          category_id: 3,
        },
        {
          name: 'Modern dinig table',
          price: 520,
          picture: 'src/client/assets/images/image12.png',
          stock_amount: 12,
          category_id: 3,
        },
      ]);
    });
};
