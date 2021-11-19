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
    const orders = await knex('orders')
      .select('orders.id as id', 'status', 'quantity', 'name')
      .join('order_items', 'id', '=', 'order_items.order_id')
      .join('products', 'products.id', '=', 'order_items.products_id')
      .where({ id });
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
