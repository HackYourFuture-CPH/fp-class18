const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const productsController = require('../controllers/products.controller');

/**
 * @swagger
 * /products:
 *  get:
 *    tags:
 *    - Products
 *    summary: Get all products
 *    description:
 *      Will return all products.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  productsController
    .getProducts(req)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /products/{ID}:
 *  get:
 *    tags:
 *    - Products
 *    summary: Get product by ID
 *    description:
 *      Will return single product with a matching ID.
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
 *        description: ID is not a number.
 *      404:
 *        description: ID not found.
 */
router.get('/:id', (req, res, next) => {
  productsController
    .getProductById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /products/{ID}:
 *  patch:
 *    tags:
 *    - Products
 *    summary: Get product by ID
 *    description:
 *      Will return single product with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the product to get
 *     - in: body
 *       name: quantity
 *       description: The quantity of the product to get
 *       schema:
 *         type: object
 *         properties:
 *           quantity:
 *             type: integer
 *       required: true
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 *      400:
 *        description: ID is not a number.
 *      404:
 *        description: ID not found.
 */

router.patch('/:id', (req, res, next) => {
  productsController
    .updateStockAmount(req.params.id, req.body.quantity)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
