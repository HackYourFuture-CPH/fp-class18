exports.seed = function (knex) {
  return knex('order_items')
    .del()
    .then(function () {
      return knex('order_items').insert([
        {
          order_id: 1,
          product_id: 1,
          quantity: 4,
        },
        {
          order_id: 1,
          product_id: 10,
        },
        {
          order_id: 2,
          product_id: 8,
          quantity: 3,
        },
        {
          order_id: 3,
          product_id: 7,
        },
        {
          order_id: 4,
          product_id: 5,
        },
        {
          order_id: 5,
          product_id: 10,
        },
        {
          order_id: 4,
          product_id: 12,
          quantity: 5,
        },
        {
          order_id: 4,
          product_id: 7,
          quantity: 2,
        },
      ]);
    });
};
