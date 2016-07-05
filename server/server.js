var express = require('express');
const bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 8080;

// configure body-parser to extract data from POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

/*
 * Routes for our API
 */
var router = express.Router();

router.get('/', function(req, res) {
  res.json({"message": "welcome to our api."});
});

// register API routes
app.use('/api', router);

// serve our application
app.use(express.static('app'))

// start our server
app.listen(port);
console.log('Server started on port ' + port);