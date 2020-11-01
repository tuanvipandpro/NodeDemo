'use strict';
module.exports = function(app) {
  const ProductController = require('./controller/ProductController');

  // API
  app.route('/api/products')
    .get(ProductController.getAll)

  app.route('/api/products/:productId')
    .get(ProductController.getById)
    .put(ProductController.updateById)

  // Auth
};