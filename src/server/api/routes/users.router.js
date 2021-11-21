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
 *         description: The ID of the user to get
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
 * /users/{user_id}/favorites:
 *  get:
 *    tags:
 *    - Favorites
 *    summary: Getfavorite products for a user
 *    description:
 *      Will return the favorite products for a user
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: user_id
 *       schema:
 *         type: integer
 *         required: true
 *         description: The user_id of the user to get its favorite products
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 *      400:
 *        description: Bad request. User_id must be an integer and larger than 0.
 *      404:
 *        description: The favorite products for the specified user_id did not found
 */
router.get('/:id/favorites/', (req, res, next) => {
  usersController
    .getUserFavorites(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});
module.exports = router;
