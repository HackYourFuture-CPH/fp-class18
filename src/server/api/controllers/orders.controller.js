/* eslint-disable camelcase */
const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getOrders = async () => {
  return knex('orders');
};

const getOrderById = async (id) => {
  if (!id) {
    throw new HttpError(
      'Bad request. Order ID must be an integer and larger than 0',
      400,
    );
  }

  try {
    let orders = await knex('orders as o')
      .select(
        'o.id as orderId',
        'o.status as orderStatus',
        'o.created_at as orderDate',
        'o.user_id as userId',
        'p.id as productId',
        'oi.quantity',
        'p.name',
        'p.price',
        'p.color',
        'p.size',
        'p.picture',
        'p.stock_amount',
        'p.price',
        'p.status',
      )
      .where('o.id', '=', id)
      .leftJoin('order_items AS oi ', 'o.id', '=', 'oi.order_id')
      .leftJoin('products AS p', 'p.id', '=', 'oi.product_id');

    if (orders.length === 0) {
      throw new Error(
        `A order with the specified ID was not found: ${id}`,
        404,
      );
    }
    // Restructuring order details to display it as an object with 2 keys.
    const nesteditems = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < orders.length; i++) {
      const { orderId, orderStatus, orderDate, userId, ...other } = orders[i];
      nesteditems.push(other);
    }
    const { orderId, orderStatus, orderDate, userId } = orders[0];
    const order = { orderId, orderStatus, orderDate, userId };
    const items = nesteditems;
    orders = { order, items };
    return orders;
  } catch (error) {
    return error.message;
  }
};

const getOrderByUserId = async (userid) => {
  if (!userid) {
    throw new HttpError(
      'Bad request.  userid must be an integer and larger than 0',
      400,
    );
  }
  try {
    const orders = await knex('orders').where({ user_id: userid });
    if (orders.length === 0) {
      throw new Error(` order with the specified userid was not found`, 404);
    }
    return orders;
  } catch (error) {
    return error.message;
  }
};

const storeNewOrder = async (data) => {
  let orderId;
  await knex('orders')
    .insert({ user_id: data.user_id })
    .returning('id')
    .then((id) => {
      [orderId] = id;
      data.items.forEach(async (item) => {
        await knex('order_items').insert({
          order_id: id[0],
          product_id: item.productId,
          quantity: item.quantity,
        });
      });
    });
  return orderId;
};

const updateOrderStatus = async (id, status) => {
  return knex('orders').where({ id }).update({ status });
};

module.exports = {
  getOrders,
  getOrderById,
  getOrderByUserId,
  storeNewOrder,
  updateOrderStatus,
};
