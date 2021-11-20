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
 * /users/{ID}:
 *  patch:
 *    tags:
 *    - Delivery Update
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

module.exports = router;
