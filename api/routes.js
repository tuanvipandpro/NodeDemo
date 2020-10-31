'use strict';
module.exports = function(app) {
  const ProductController = require('./controller/ProductController');

  app.route('/products')
    .get(ProductController.getAll)

    app.route('/products/:productId')
    .get(ProductController.getById)
    .put(ProductController.updateById)
};