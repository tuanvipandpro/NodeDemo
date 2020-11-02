'use strict';

const LoginController = require('./controller/LoginController')
const ProductController = require('./controller/ProductController')

module.exports = function(app) {  
  // API
  app
    .route('/api/products')
  /**
   * @swagger
   * /api/products:
   *  get:
   *    summary: Get all products
   *    responses:
   *      '200':
   *        description: Request Sucessfully !
   *      '403':
   *        description: Forbidden !!!
   *      '500':
   *        description: Internal Server Error !!!
   */    
    .get(ProductController.getAll)

  app.route('/api/products/:productId')
  /**
   * @swagger
   * /api/products/{id}:
   *  get:
   *    summary: Get product by id
   *    responses:
   *      '200':
   *        description: Request Sucessfully !
   *      '403':
   *        description: Forbidden !!!
   *      '500':
   *        description: Internal Server Error !!!
   */     
    .get(ProductController.getById)
  /**
   * @swagger
   * /api/products/{id}:
   *  put:
   *    summary: Update product by id
   *    responses:
   *      '200':
   *        description: Request Sucessfully !
   *      '403':
   *        description: Forbidden !!!
   *      '500':
   *        description: Internal Server Error !!!
   */   
    .put(ProductController.updateById)

  // Auth
  app.route('/auth/login')
  /**
   * @swagger
   * /auth/login:
   *  post:
   *    summary: Login
   *    responses:
   *      '200':
   *        description: Request Sucessfully !
   *      '403':
   *        description: Forbidden !!!
   *      '500':
   *        description: Internal Server Error !!!
   */     
    .post(LoginController.login)
}