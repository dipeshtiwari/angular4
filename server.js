//Install express server
const express = require('express');
const app = express();
var cors = require('cors')
var bodyParser = require('body-parser');

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json()); // parse application/vnd.api+json as json
app.use(cors()); //handle for cross-origin-resource-sharing
//app config file
var config = require('./node-api/config/app.config');
//db config file
var database = require('./node-api/config/database');

//var fileUpload = require('./node-api/app/helper/fileupload');

//set portnumber ot listen
app.set('port', (process.env.PORT || config.port));
// set secret variable
app.set('superSecret', config.secret);

// Api's
app.get('/hello', function(req, res) {
    res.send('hello');
});

app.get('/api/test', function(request, response) {
    response.status(200).json({ 'meessage': 'success' });
});

//common routes for multiple routes
app.use('/api', require('./node-api/app/routes/routes.js'));

// Start the app by listening on the default Heroku port

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

// app.listen(process.env.PORT || 5050);
// console.log('node is running on port 5050');