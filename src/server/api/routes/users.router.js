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
 *         type: string
 *         required: true
 *         description: The ID of the user to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 *      400:
 *        description: Bad request. Incorrect user id.
 *      404:
 *        description: A user with the specified ID was not found
 */
router.get('/:id', (req, res, next) => {
  usersController
    .getUsersById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

router.get('/:id/favorites/', (req, res, next) => {
  usersController
    .getUserFavorites(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /users/{ID}:
 *  patch:
 *    tags:
 *    - Users
 *    summary: Update Delivery Informations
 *    description:
 *      Will update user delivery infos.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the users to patch.
 *      - in: body
 *        name: Delivery Inputs
 *        description: Delivery informations to update.
 *        schema:
 *          type: object
 *          properties:
 *            address:
 *              type: string
 *            city:
 *              type: string
 *            zipcode:
 *              type: string
 *            country:
 *              type: string
 *    responses:
 *      200:
 *        description: Delivery was patched
 *      5XX:
 *        description: Unexpected error.
 */
router.patch('/:id', (req, res, next) => {
  usersController
    .editUser(req.params.id, req.body)
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
 *      To Save new user to the DB
 *    produces: application/json
 *    parameters:
 *     - in: body
 *       name: user
 *       description: create a new user
 *       schema:
 *         type: object
 *         required: true
 *         description: user json object
 *         properties:
 *            id:
 *              type: string
 *            address:
 *              type: string
 *            zipcode:
 *              type: integer
 *            city:
 *              type: string
 *            country:
 *              type: string
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
 * /users/{user_id}/favorites:
 *  get:
 *    tags:
 *    - Users
 *    summary: Getfavorite products for a user
 *    description:
 *      Will return the favorite products for a user
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: user_id
 *       schema:
 *         type: string
 *         required: true
 *         description: The user_id of the user to get its favorite products
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 *      400:
 *        description: Bad request. Incorrect user id.
 *      404:
 *        description: The favorite products for the specified user_id did not found
 */
router.get('/:id/:productId/favorites/', (req, res, next) => {
  usersController
    .getUserFavorites(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /users/{user_id}/favorites:
 *  post:
 *    tags:
 *    - Users
 *    summary: Save user favorites
 *    description:
 *      To Save new favorite from user to the DB
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: user_id
 *       description: For users favorite to post.
 *     - in: body
 *       name: user
 *       description: create a new favorite item for user
 *       schema:
 *         type: object
 *         required: true
 *         description: user json object
 *         properties:
 *            product_id:
 *              type: integer
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/:id/favorites', (req, res, next) => {
  usersController
    .saveFavorite(req.params.id, req.body)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /users/{user_id}/favorites:
 *  delete:
 *    tags:
 *    - Users
 *    summary: Delete a favorite product for user in database
 *    description:
 *      Will delete a product with a given user_id from favorites database.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: user_id
 *       description: For eliminate to users favorite.
 *     - in: body
 *       name: user
 *       description: delete a favorite item for user
 *       schema:
 *         type: object
 *         required: true
 *         description: user json object
 *         properties:
 *            product_id:
 *              type: integer
 *
 *    responses:
 *      200:
 *        description: Favorite product deleted
 *      5XX:
 *        description: Unexpected error.
 */
router.delete('/:id/favorites', (req, res) => {
  usersController
    .deleteUserFavorite(req.params.id, req.body)
    .then((result) => {
      // If result is equal to 0, then that means the user or product id does not exist
      if (result === 0) {
        res
          .status(404)
          .send('The user or product ID you provided does not exist.');
      } else {
        res.json({ success: true });
      }
    })
    .catch((error) => console.log(error));
});

module.exports = router;
