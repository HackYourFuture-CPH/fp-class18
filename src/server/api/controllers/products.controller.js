const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getProducts = async (request) => {
  let products = knex('products');
  if (!request.query.category && !request.query.daysBeforeToday) {
    return products;
  }
  if (request.query.daysBeforeToday && !isNaN(request.query.daysBeforeToday)) {
    const createdMinDate = new Date();
    createdMinDate.setDate(
      createdMinDate.getDate() - request.query.daysBeforeToday,
    );
    products = products.where('created_at', '>=', createdMinDate);
  }
  if (request.query.category) {
    products = products
      .join('categories', 'categories.id', 'category_id')
      .select('products.*')
      .where('categories.name', 'like', `%${request.query.category}%`);
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

const updateStockAmount = async (productid) => {
  try {
    const quantities = await knex('order_items')
      .select('quantity', 'products.stock_amount', 'products.id')
      .join('products', 'product_id', '=', 'products.id')
      .where('products.id', '=', productid);
    if (quantities.length === 0) {
      throw new Error(`Incorrect entry with the id of ${productid}`, 404);
    }
    const stockAmount = Number(quantities[0].stock_amount);
    const itemQuantity = Number(quantities[0].quantity);
    if (stockAmount < itemQuantity || stock_amount === 0) {
      throw new Error(`Incorrect entry with the id of ${id}`, 404);
    } else {
      const newStockAmount = stockAmount - itemQuantity;
      console.log(newStockAmount);
      return knex('products').where({ id: productid }).update({
        stock_amount: newStockAmount,
      });
    }
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getProducts,
  getProductById,
  updateStockAmount,
};
