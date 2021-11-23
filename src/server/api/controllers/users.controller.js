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

const saveUser = async (data) => {
  await knex('users').insert(data);
};

module.exports = {
  getUsers,
  getUsersById,
  saveUser,
};
