const express = require('express');

const router = express.Router();

// Router imports
const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');
const productsRouter = require('./products.router');
const ordersRouter = require('./orders.router');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: '1.0',
      title: 'Final project',
      description: 'API documentation for the final project',
      contact: {},
    },
    host: '',
    basePath: '/api',
  },
  securityDefinitions: {},
  apis: ['./src/server/api/routes/*.js'],
};

const swaggerDocument = swaggerJsDoc(swaggerOptions);

// Route for Swagger API Documentation
router.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Application routes
router.use('/categories', categoriesRouter);
router.use('/users', usersRouter);
router.use('/products', productsRouter);
router.use('/orders', ordersRouter);
router.use('/order_items', ordersRouter);

module.exports = router;
