const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const usersController = require('../controllers/users.controller');

/**
 * @swagger
 * /users:
 *  get:
 *    tags:
 *    - Users
 *    summary: Get all users
 *    description:
 *      Will return all users.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  usersController
    .getUsers()
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /users/{ID}:
 *  get:
 *    tags:
 *    - Users
 *    summary: Get user by ID
 *    description:
 *      Will return single user with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the module to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 *      400:
 *        description: Bad request. User ID must be an integer and larger than 0.
 *      404:
 *        description: A user with the specified ID was not found
 */
router.get('/:id', (req, res, next) => {
  usersController
    .getUsersById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /users:
 *  post:
 *    tags:
 *    - Users
 *    summary: Save user information
 *    description:
 *      Will return status of the operation true / false
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: user
 *       schema:
 *         type: json
 *         required: true
 *         description: user json object
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', (req, res, next) => {
  usersController
    .saveUser(req.body)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /users/{id}:
 *  put:
 *    tags:
 *    - Users
 *    summary: Update user information by id
 *    description:
 *      Will return status of the operation true / false
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: integer
 *         required: true
 *         description: user id
 *     - in: path
 *       name: user
 *       schema:
 *         type: json
 *         required: true
 *         description: user json object
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.put('/:id', (req, res, next) => {
  const idValue = parseInt(req.params.id, 10);
  usersController
    .updateUser(idValue, req.body)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
