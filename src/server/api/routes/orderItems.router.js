const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const orderItemsController = require('../controllers/orderItems.controller');

/**
 * @swagger
 * /order_items:
 *  get:
 *    tags:
 *    - Order_items
 *    summary: Get all order_items
 *    description:
 *      Will return all orders including all items.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  orderItemsController
    .getOrderItems()
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /order_items/{ID}:
 *  get:
 *    tags:
 *    - Order_items
 *    summary: Get order's items by order_id
 *    description:
 *      Will return all items in a order with a matching ID.
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
 *        description: A order with the specified ID was not found
 */
router.get('/:id', (req, res, next) => {
  orderItemsController
    .getOrderItemsByOrderId(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});
/**
 * @swagger
 * /order_items:
 *  post:
 *    tags:
 *    - Order_items
 *    summary: add new item in an Order
 *    description:
 *     add new item in an order for a user
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: order_items
 *        description: create a new item in order
 *        schema:
 *          type: object
 *          properties:
 *            order_id:
 *              type: integer
 *            product_id:
 *              type: integer
 *            quantity:
 *              type: integer
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', (req, res, next) => {
  orderItemsController
    .addNewOrderItem(req.body)
    .then((result) => res.json(result))
    .catch(next);
});
/**
 * @swagger
 * /order_items/{ID}:
 *  delete:
 *    tags:
 *    - Order_items
 *    summary: delete an item from an order in order_items table
 *    description:
 *     delete an item from an order
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the order_item table
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.delete('/:id', (req, res, next) => {
  orderItemsController
    .deleteOrderItem(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});
/**
 * @swagger
 * /order_items/{ID}:
 *  patch:
 *    tags:
 *    - Order_items
 *    summary: update quantity of item in an order
 *    description:
 *     update quantity of item in an order
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: order_items
 *        description: update the quantity of item in order
 *        schema:
 *          type: object
 *          properties:
 *            id:
 *              type: integer
 *            quantity:
 *              type: integer
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.put('/:id', (req, res, next) => {
  orderItemsController
    .updateOrderItemQuantity(req.params.id, req.body)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
