'use strict';

const LoginController = require('./controller/LoginController')
const ProductController = require('./controller/ProductController')
const JwtUtils = require('./utils/JwtUtils')

module.exports = function(app) {
  // API
  app
    .use(JwtUtils.verifyToken)
    .route('/api/products')
    .get(ProductController.getAll)

  app.route('/api/products/:productId')
    .get(ProductController.getById)
    .put(ProductController.updateById)

  // Auth
  app.route('/auth/login')
    .post(LoginController.login)
}