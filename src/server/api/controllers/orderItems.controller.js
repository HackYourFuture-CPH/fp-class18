const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getOrderItems = async () => {
  return knex('order_items');
};

const getOrderItemsByOrderId = async (orderId) => {
  if (!orderId) {
    throw new HttpError(
      'Bad request. Order ID must be an integer and larger than 0',
      400,
    );
  }

  try {
    const orderItems = await knex('order_items').where({ order_id: orderId });
    return orderItems;
  } catch (error) {
    return error.message;
  }
};
// data {order_id:1, product_id:1, quantity:2}
const addNewOrderItem = async (data) => {
  try {
    const response = await knex('order_items').insert(data);
    return response;
  } catch (error) {
    return error.message;
  }
};

const deleteOrderItem = async (id) => {
  if (!id) {
    throw new HttpError(
      'Bad request. Order ID must be an integer and larger than 0',
      400,
    );
  }
  try {
    const response = await knex('order_items').where({ id: id }).del();
    return response;
  } catch (error) {
    return error.message;
  }
};

const updateOrderItemQuantity = async (id, data) => {
  if (!id) {
    throw new HttpError(
      'Bad request. Order ID must be an integer and larger than 0',
      400,
    );
  }
  if (!data.quantity) {
    throw new HttpError(
      'Bad request. quantity must be an integer and larger than 0',
      400,
    );
  }
  try {
    const response = await knex('order_items')
      .where({ id: id })
      .update({ quantity: data.quantity });
    return response;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getOrderItems,
  getOrderItemsByOrderId,
  addNewOrderItem,
  deleteOrderItem,
  updateOrderItemQuantity,
};
