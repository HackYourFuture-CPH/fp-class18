const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getUsers = async () => {
  return knex('users');
};

const getUsersById = async (id) => {
  if (!id) {
    throw new HttpError('Id should be a number', 400);
  }

  try {
    const users = await knex('users').where({ id });
    if (users.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return users;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getUsers,
  getUsersById,
};

