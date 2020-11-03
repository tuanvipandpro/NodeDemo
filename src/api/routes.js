'use strict';

const LoginController = require('./controller/LoginController')
const ProductController = require('./controller/ProductController')

module.exports = function(app) {  
  // API
  app
    .route('/api/products')  
    .get(ProductController.getAll)

  app.route('/api/products/:productId')    
    .get(ProductController.getById) 
    .put(ProductController.updateById)

  // Auth
  app.route('/auth/login')    
    .post(LoginController.login)
}