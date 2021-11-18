exports.seed = function (knex) {
  return knex('order_items')
    .del()
    .then(function () {
      return knex('order_items').insert([
        {
          id: 1,
          order_id: 1,
          product_id: 1,
          quantity: 4,
        },
        {
          id: 2,
          order_id: 1,
          product_id: 10,
        },
        {
          id: 3,
          order_id: 2,
          product_id: 8,
          quantity: 3,
        },
        {
          id: 4,
          order_id: 3,
          product_id: 7,
        },
        {
          id: 5,
          order_id: 4,
          product_id: 5,
        },
        {
          id: 6,
          order_id: 5,
          product_id: 10,
        },
        {
          id: 7,
          order_id: 4,
          product_id: 12,
          quantity: 5,
        },
      ]);
    });
};
