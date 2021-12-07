/* eslint-disable camelcase */
const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getUsers = async () => {
  return knex('users');
};

const getUsersById = async (id) => {
  checkIfCorrectId(id);
  try {
    const users = await knex('users').where({ id });
    if (users.length === 0) {
      throw new HttpError(
        `A user with the specified ID was not found : ${id}`,
        404,
      );
    }
    return users;
  } catch (error) {
    if (error instanceof HttpError)
      throw new HttpError(error.message, error.httpStatus);
    return error.message;
  }
};

const editUser = async (UserId, updatedUser) => {
  checkIfCorrectId(UserId);
  return knex('users').where({ id: UserId }).update({
    address: updatedUser.address,
    city: updatedUser.city,
    zipcode: updatedUser.zipcode,
    country: updatedUser.country,
  });
};

const saveUser = async (data) => {
  try {
    await knex('users').insert(data);
  } catch (error) {
    if (error instanceof HttpError)
      throw new HttpError(error.message, error.httpStatus);
    return error.message;
  }
};

const getUserFavorites = async (user_id) => {
  // eslint-disable-next-line radix
  checkIfCorrectId(user_id);
  try {
    const favorites = await knex('favorites')
      .join('products', 'products.id', 'product_id')
      .select('products.*')
      .where({ user_id })
      .distinct();
    if (!Array.isArray(favorites) || favorites.length === 0) {
      throw new HttpError(
        `The favorite products for speecified user_id was not found : ${user_id}`,
        404,
      );
    }
    return favorites;
  } catch (error) {
    if (error instanceof HttpError)
      throw new HttpError(error.message, error.httpStatus);
    return error.message;
  }
};

const saveFavorite = async (user_id, body) => {
  checkIfCorrectId(user_id);
  await knex('favorites').insert({
    user_id,
    product_id: body.product_id,
  });
};

const deleteUserFavorite = (user_id, body) => {
  return knex('favorites')
    .where({
      user_id,
      product_id: body.product_id,
    })
    .del();
};

module.exports = {
  getUsers,
  getUsersById,
  editUser,
  saveUser,
  getUserFavorites,
  deleteUserFavorite,
  saveFavorite,
};

function checkIfCorrectId(id) {
  const reg = /^(?=.*?\d)[a-zA-Z\d]+$/;
  if (!reg.test(id)) {
    throw new HttpError('Bad request. Incorrect user id', 400);
  }
}
