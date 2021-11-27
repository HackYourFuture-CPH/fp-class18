/* eslint-disable camelcase */
const knex = require('../../config/db');

const getUsers = async () => {
  return knex('users');
};

const getUsersById = async (id) => {
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

const editUser = async (UserId, updatedUser) => {
  return knex('users').where({ id: UserId }).update({
    address: updatedUser.address,
    city: updatedUser.city,
    zipcode: updatedUser.zipcode,
    country: updatedUser.country,
  });
};

const saveUser = async (data) => {
  await knex('users').insert(data);
};

const getUserFavorites = async (user_id) => {
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

module.exports = {
  getUsers,
  getUsersById,
  editUser,
  saveUser,
  getUserFavorites,
};
