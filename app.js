const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const jwt = require('./src/api/utils/JwtUtils')

// Middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(jwt.verifyToken)

// Route
let routes = require('./src/api/routes')
routes(app)

// Default URL
app.get('/', (req, res) => {
	res.send('App is running at: ' + port);
});

// Listen Port
app.listen(port, () => {
    console.log('RESTful API server started on: ' + port)
});