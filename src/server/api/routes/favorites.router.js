const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const favoritesController = require('../controllers/favorites.controller');

/**
 * @swagger
 * /users/{user_id}/favorites:
 *  get:
 *    tags:
 *    - Favorites
 *    summary: Get all favorites products for a user
 *    description:
 *      Will return all favorite products for a given user
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/users/{user_id}/favorites', (req, res, next) => {
  favoritesController
    .getFavoritesByUserId()
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
