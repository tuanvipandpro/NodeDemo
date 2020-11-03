const RESPONSE_STATUS = {
    "200" : {description: 'Get all product success'},
    "400" : {description: 'Bad Request !'},                        
    "403" : {description: 'Forbidden !'},
    "500" : {description: 'Internal Server Error !'}   
}

module.exports = {
    /**
     * Get Config Swagger
     */      
    getConfigSwagger() {
        return {
            swaggerDefinition: {
                openapi: '3.0.3',
                info: {
                    version: "1.0.0",
                    title: "NodeJS Project",
                    description: "NodeJS Project Demo",
                    contact: {
                      name: "TuanLM",
                      email: "tuanvipandpro@gmail.com"
                    },
                    license: {
                        name: "Apache 2.0",
                        url: "https://www.apache.org/licenses/LICENSE-2.0.html"
                    }            
                },
                servers: [
                    {url: 'http://localhost:3000', description: 'Local Server'}
                ],
                components: {
                    securitySchemes: {
                        bearerAuth: {
                            type: 'http',
                            scheme: 'bearer',
                            bearerFormat: 'JWT'
                        }
                    }
                }, 
                // security: [{bearerAuth: []}], --- Global Authen 
                tags: [
                    {name: 'Login', description: 'Authenticate API'},
                    {name: 'Product', description: 'Product API'}
                ],
                paths: {
                    "/auth/login": {
                        post: {
                            tags: ['Login'],
                            summary: 'Login',
                            description: 'Login and get access_token',
                            requestBody: {
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: 'object',
                                            properties: {
                                                username: {type: 'string'},
                                                password: {type: 'string'}
                                            },
                                            required: ['username', 'password'] 
                                        }
                                    }   
                                }
                            },             
                            responses: RESPONSE_STATUS                     
                        } 
                    },
                    "/api/products": {
                        get: {
                            tags: ['Product'],
                            security: [{bearerAuth: []}],
                            summary: 'Get all products',
                            description: 'Get all products',
                            responses: RESPONSE_STATUS 
                        }
                    },
                    "/api/products/{productId}": {
                        parameters: [
                            {name: 'productId', in: 'path', required: true, description: 'Product ID', type: 'integer'}
                        ],
                        get: {
                            tags: ['Product'],
                            security: [{bearerAuth: []}],
                            summary: 'Get product by id',
                            description: 'Get product by id',
                            responses: RESPONSE_STATUS                                       
                        },
                        put: {
                            tags: ['Product'],
                            summary: 'Update product by id',
                            description: 'Update product by id',
                            security: [{bearerAuth: []}],
                            requestBody: {
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: 'object',
                                            properties: {
                                                name: {type: 'string'},
                                                price: {type: 'number'},
                                                amount: {type: 'number'}
                                            },
                                            required: ['username', 'password'] 
                                        }
                                    }   
                                }
                            },            
                            responses: RESPONSE_STATUS                    
                        }                
                    }
                }
            },
            apis: ['./src/api/routes.js']
        }       
    }
}