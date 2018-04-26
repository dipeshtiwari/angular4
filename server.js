//Install express server
const express = require('express');
const app = express();
var path = require('path');
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var cors = require('cors');
var fs = require('fs');

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('/hello', function(req, res) {
    res.send('hello');
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 5050);
console.log('node is running on port 5050');