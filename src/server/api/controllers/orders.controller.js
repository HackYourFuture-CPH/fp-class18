const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getOrders = async () => {
  return knex('orders');
};

const getOrdersById = async (id) => {
  if (!id) {
    throw new HttpError(
      'Bad request. Order ID must be an integer and larger than 0',
      400,
    );
  }

  try {
    const orders = await knex('orders').where({ id });
    if (orders.length === 0) {
      throw new Error(
        `An order with the specified ID was not found : ${id}`,
        404,
      );
    }
    return orders;
  } catch (error) {
    return error.message;
  }
};
const storeNewOrder = async (data) => {
  await knex('orders').insert(data);
};
module.exports = {
  getOrders,
  getOrdersById,
  storeNewOrder,
};
