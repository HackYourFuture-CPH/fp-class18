/* eslint-disable camelcase */
const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getOrderItems = async () => {
  return knex('order_items');
};

const getOrderItemsByOrderId = async (order_id) => {
  // eslint-disable-next-line radix
  if (!parseInt(order_id)) {
    throw new HttpError(
      'Bad request. Order ID must be an integer and larger than 0',
      400,
    );
  }

  try {
    const orderItems = await knex('order_items').where({ order_id });
    return orderItems;
  } catch (error) {
    return error.message;
  }
};

const storeNewOrderItem = async (data) => {
  await (await knex('order_items')).insert(data);
};
module.exports = {
  getOrderItems,
  getOrderItemsByOrderId,
  storeNewOrderItem,
};
