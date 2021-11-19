const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getCategories = async () => {
  return knex('categories');
};

const getCategoryById = async (id) => {
  if (!id) {
    throw new HttpError('Id should be a number', 400);
  }

  try {
    const categories = await knex('categories').where({ id });
    if (categories.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return categories;
  } catch (error) {
    return error.message;
  }
};
module.exports = {
  getCategories,
  getCategoryById,
};
