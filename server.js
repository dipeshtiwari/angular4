//Install express server
const express = require('express');
const app = express();
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ 'extended': 'true' })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

app.get('/hello', function(req, res) {
    res.send('hello');
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 5050);
console.log('node is running on port 5050');