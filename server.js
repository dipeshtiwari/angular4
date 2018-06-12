//Node packages
var express = require('express');
var app = express();
var fs = require('fs');
var express = require('express');
var app = express(); // create our app w/ express
var path = require('path');
var morgan = require('morgan'); // log requests to the console (express4)
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var cors = require('cors');

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

//app config file
var config = require('./node-api/config/app.config');
//db config file
var database = require('./node-api/config/database');

var fileUpload = require('./node-api/app/helper/fileupload');

//set portnumber ot listen
app.set('port', (process.env.PORT || config.port));
// set secret variable
app.set('superSecret', config.secret);
//writing the logs to the file
// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
app.use(morgan('dev', { stream: accessLogStream })); // log every request to the console
app.use(bodyParser.urlencoded({ 'extended': 'true' })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

app.use(cors());

app.post('/fileUpload', fileUpload.upload.single('image'), (req, res, next) => {
    res.status(200).json({ 'message': 'File uploaded successfully' });
});

//export the index.html form public
// app.get("", (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/index.html'));
// });

app.get('/api/test', function(request, response) {
    response.status(200).json({ 'meessage': 'success' });
});

//common routes for multiple routes
app.use('/api', require('./node-api/app/routes/routes.js'));

//listen port number
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});