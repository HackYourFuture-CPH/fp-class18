const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const ordersController = require('../controllers/orders.controller');

/**
 * @swagger
 * /orders:
 *  get:
 *    tags:
 *    - Orders
 *    summary: Get all orders
 *    description:
 *      Will return all orders.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  ordersController
    .getOrders()
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /orders/{user_id}:
 *  get:
 *    tags:
 *    - Orders
 *    summary: Get order by user_id
 *    description:
 *      Will return  order with a matching user_id.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: user_id
 *       schema:
 *         type: integer
 *         required: true
 *         description: The order of the user_id to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 *      400:
 *        description: Bad request. user_id must be an integer and larger than 0.
 *      404:
 *        description: A order with the specified user_id was not found.
 */
router.get('/?{user_id}', (req, res, next) => {
  ordersController
    .getOrderByUserId(req.query.user_id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
