//Install express server
const express = require('express');
const app = express();
var path = require('path');
var morgan = require('morgan'); // log requests to the console (express4)
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var cors = require('cors');
var fs = require('fs');

var config = require('./node-api/config/app.config');

//db config
var database = require('./node-api/config/database');

// Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist'));


app.get('/hello', function(req, res) {
    res.send('hello');
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 5050);

app.set('view options', {
    pretty: true
});

app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({
    'extended': 'true'
})); // parse application/x-www-form-urlencoded
// to support JSON-encoded 
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
})); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(cors());
app.set('superSecret', config.secret); // secret variable

// generate error and handle with error handler
app.get('/error-gen', function(req, res, next) {
    var err = new Error("Something went wrong");
    next(err);
});

app.get('/none-api', function(req, res) {
    res.send('hello api');
});

// Api routes 
// Middleware function to log request protocol
app.use('/api', require('./node-api/app/routes/routes.js'));

// Error handler
require('./node-api/app/helper/error-handler');