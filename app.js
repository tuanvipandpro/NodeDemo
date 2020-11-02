// Library
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const jwt = require('./src/api/utils/JwtUtils')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

// Config For App
require('dotenv').config()
const port = process.env.PORT || 3000

// Config Swagger
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "NodeJS Project",
            description: "NodeJS Project Demo",
            contact: {
              name: "TuanLM",
              email: "tuanvipandpro@gmail.com"
            }
        },
        servers: [{url: 'http://localhost:3000', description: 'Local Server'}],
        components: {
            securitySchemes	: {
                name: "bearerAuth",
                type: 'http',
                bearerFormat: "JWT",
                scheme: "Bearer"
            }
        }
    },
    apis: ['./src/api/routes.js']
}
const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

// Middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(jwt.verifyToken)

// Route
let routes = require('./src/api/routes')
routes(app)

// Default URL
app.get('/', (req, res) => {
	res.send('<h2>App is running at: ' + port + '</h2>')
});

// Listen Port
app.listen(port, () => {
    console.log(`RESTful API server started on: ${port}`)
});