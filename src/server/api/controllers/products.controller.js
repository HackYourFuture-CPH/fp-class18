const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getProducts = async (request) => {
  let products = knex('products');
  if (request.query.daysBeforeToday && !isNaN(request.query.daysBeforeToday)) {
    const createdMinDate = new Date();
    createdMinDate.setDate(
      createdMinDate.getDate() - request.query.daysBeforeToday,
    );
    products = products.where('created_at', '>=', createdMinDate);
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
