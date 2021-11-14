const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getProducts = async (request) => {
  let products = knex('products');
  // const today = new Date().toISOString().slice(0, 10);
  const num = parseInt(request.query.daysBeforeToday, 10);
  const reqDate = knex
    .select(knex.raw('date_add(?, INTERVAL ? day)', [knex.fn.now(), -num]))
    .whereRaw("date_format(date, '%Y-%m-%d') BETWEEN ? AND ?", []);
  // const reqDate = knex.select(knex.raw(`(DATE(NOW()) - INTERVAL -${num} DAY)`))
  if (request.query.daysBeforeToday && !isNaN(num)) {
    products = products.where('products.created_at', '>=', `${reqDate}`);
  }
  return products;
};

const getProductById = async (id) => {
  if (!id) {
    throw new HttpError('Id should be a number', 400);
  }

  try {
    const products = await knex('products').where({ id });
    if (products.length === 0) {
      throw new Error(`Incorrect entry with the id of ${id}`, 404);
    }
    return products;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getProducts,
  getProductById,
};
