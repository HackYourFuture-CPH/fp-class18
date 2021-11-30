/* eslint-disable camelcase */
const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getOrderItems = async () => {
  return knex('order_items');
};

const getOrderItemsByOrderId = async (orderId) => {
  // eslint-disable-next-line radix
  if (!orderId) {
    throw new HttpError(
      'Bad request. Order ID must be an integer and larger than 0',
      400,
    );
  }

  try {
    const order_items = await knex('order_items').where({ order_id: orderId });
    if (order_items.length === 0) {
      throw new Error(`order with the specified orderid was not found`, 404);
    }
    return order_items;
  } catch (error) {
    return error.message;
  }
};

const storeNewOrderItem = async (data) => {
  await knex('order_items').insert(data).returning('id').where('id');
};
module.exports = {
  getOrderItems,
  getOrderItemsByOrderId,
  storeNewOrderItem,
};
