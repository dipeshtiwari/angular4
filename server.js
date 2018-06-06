//Install express server
const express = require('express');
const app = express();
var path = require('path');

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/public'));

app.get('/hello', function(req, res) {
    res.send('hello');
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 5050);
console.log('node is running on port 5050');