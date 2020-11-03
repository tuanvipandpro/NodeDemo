// Library
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const jwt = require('./src/api/utils/JwtUtils')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const swaggerDocs = swaggerJsDoc(require('./swagger').getConfigSwagger())

// Config For App
require('dotenv').config() // .env
const port = process.env.PORT || 3000 // port
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocs)) // swagger

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
})