const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// require('dotenv').load()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let routes = require('./src/api/routes') //importing route
routes(app)

app.get('/', (req, res) => {
	res.send('App is running at: ' + port);
});

app.listen(port, () => {
    console.log('RESTful API server started on: ' + port)
});