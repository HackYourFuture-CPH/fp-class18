const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getOrders = async () => {
  return knex('orders');
};

const getOrderById = async (id) => {
  if (!id) {
    throw new HttpError('Id should be a number', 400);
  }

  try {
    const orders = await knex('orders AS o')
      // .select('orders.id as id', 'status', 'quantity', 'name')
      .select(
        'o.id as orderId',
        'o.status',
        'o.user_id',
        'oi.quantity',
        'p.id as productId',
        'p.name',
        'p.picture',
        'p.stock_amount',
        'p.price',
      )
      .join('order_items AS oi ', 'o.id', '=', 'oi.order_id')
      .join('products AS p', 'p.id', '=', 'oi.product_id')
      .where('o.id', '=', id);
    if (orders.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return orders;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getOrders,
  getOrderById,
};
