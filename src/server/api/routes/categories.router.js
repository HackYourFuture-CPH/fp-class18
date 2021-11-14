const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const categoriesController = require('../controllers/categories.controller');

/**
 * @swagger
 * /categories:
 *  get:
 *    tags:
 *    - Categories
 *    summary: Get all categories
 *    description:
 *      Will return all categories.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  categoriesController
    .getCategories()
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /categories/{ID}:
 *  get:
 *    tags:
 *    - Categories
 *    summary: Get category by ID
 *    description:
 *      Will return single category with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the category to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id', (req, res, next) => {
  categoriesController
    .getCategoryById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});
module.exports = router;
