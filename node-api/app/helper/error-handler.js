var express = require('express');
var app = express(); // create our app w/ express

// Error Handling
app.use(function(err, req, res, next) {
    res.status(500).json({ 'message': 'Something went worng.' });
});