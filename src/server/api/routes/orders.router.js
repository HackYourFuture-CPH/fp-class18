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
 * /orders/{ID}:
 *  get:
 *    tags:
 *    - Orders
 *    summary: Get order by ID
 *    description:
 *      Will return single order with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the order to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id', (req, res, next) => {
  ordersController
    .getOrderById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
