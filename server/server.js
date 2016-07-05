const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;
const apiRouter = require ('./api/api-router')

// configure body-parser to extract data from POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// register API routes
app.use('/api', apiRouter);

// serve our application
app.use(express.static('app'))

// start our server
app.listen(port);
console.log('Server started on port ' + port);