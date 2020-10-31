'use strict';
module.exports = function(app) {
  const ProductController = require('./controller/ProductController');

  // todoList Routes
  app.route('/products')
    .get(ProductController.getAll)

//   app.route('/products/:productId')
//     .get(productsCtrl.detail)
//     .put(productsCtrl.update)
//     .delete(productsCtrl.delete);
};