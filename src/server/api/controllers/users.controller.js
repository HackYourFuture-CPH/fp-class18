/* eslint-disable camelcase */
const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getUsers = async () => {
  return knex('users');
};

const getUsersById = async (id) => {
  if (!id) {
    throw new HttpError(
      'Bad request. User ID must be an integer and larger than 0',
      400,
    );
  }

  try {
    const users = await knex('users').where({ id });
    if (users.length === 0) {
      throw new Error(
        `A user with the specified ID was not found : ${id}`,
        404,
      );
    }
    return users;
  } catch (error) {
    return error.message;
  }
};

const getUserFavorites = async (user_id) => {
  // eslint-disable-next-line radix
  if (!parseInt(user_id)) {
    throw new HttpError(
      'Bad request. user_id must be an integer and larger than 0',
      400,
    );
  }
  try {
    const favorites = await knex('favorites')
      .join('products', 'products.id', 'product_id')
      .select('products.*')
      .where({ user_id });
    if (favorites.length === 0) {
      throw new Error(
        `The favorite products for the requested user_id was not found : Requested user_id : ${user_id}`,
        404,
      );
    }
    return favorites;
  } catch (error) {
    return error.message;
  }
};

const editUser = async (UserId, updatedUser) => {
  if (!parseFloat(UserId)) {
    throw new HttpError('UserId should be a number', 400);
  }
  return knex('users').where({ id: UserId }).update({
    address: updatedUser.address,
    city: updatedUser.city,
    zipcode: updatedUser.zipcode,
    country: updatedUser.country,
  });
};

module.exports = {
  getUsers,
  getUsersById,
  getUserFavorites,
  editUser,
};
