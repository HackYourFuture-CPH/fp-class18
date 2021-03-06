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
 *  patch:
 *    tags:
 *    - Orders
 *    summary: Update orders status
 *    description:
 *      Will update order status
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the order to patch.
 *      - in: body
 *        name: New status
 *        description: [created, confirmed, payed]
 *        schema:
 *          type: object
 *          properties:
 *            status:
 *              type: string
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.patch('/:id', (req, res, next) => {
  ordersController
    .updateOrderStatus(req.params.id, req.body.status)
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
 *      400:
 *        description: Bad request. Order ID must be an integer and larger than 0.
 *      404:
 *        description: A order with the specified ID was not found.
 */
router.get('/:id', (req, res, next) => {
  ordersController
    .getOrderById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});
/**
 * @swagger
 * /orders/user/{userid}:
 *  get:
 *    tags:
 *    - Orders
 *    summary: Get order by userid
 *    description:
 *      Will return  order with a matching userid.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: userid
 *       schema:
 *         type: integer
 *         required: true
 *         description: The order of the userid to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 *      400:
 *        description: Bad request. userid must be an integer and larger than 0.
 *      404:
 *        description: A order with the specified userid was not found.
 */

router.get('/user/:userid', (req, res, next) => {
  ordersController
    .getOrderByUserId(req.params.userid)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /orders:
 *  post:
 *    tags:
 *    - Orders
 *    summary: Save new order information
 *    description:
 *     will save an order for a user
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: Order
 *        description: create a new order for a user
 *        schema:
 *          type: object
 *          properties:
 *            user_id:
 *              type: string
 *            items:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  productId:
 *                    type: integer
 *                  quantity:
 *                    type: integer
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */

router.post('/', (req, res, next) => {
  ordersController
    .storeNewOrder(req.body)
    .then((result) => res.json(result))
    .catch(next);
});
module.exports = router;
