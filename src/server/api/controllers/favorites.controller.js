const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getFavorites = async () => {
  return knex('favorites');
};

const getFavoritesByUserId = async (user_id) => {
  if (!user_id) {
    throw new HttpError('Id should be a number', 400);
  }

  try {
    const favorites = await knex('favorites').where({ user_id });
    if (favorites.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return favorites;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getFavorites,
  getFavoritesByUserId,
};