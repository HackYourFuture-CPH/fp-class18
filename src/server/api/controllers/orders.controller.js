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
    const orders = await knex('orders').select('orders').where({ id });
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
