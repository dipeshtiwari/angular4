//Install express server
const express = require('express');
const app = express();

// Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist'));

app.get('/hello', function(req, res) {
    res.send('hello');
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 5050);

app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users