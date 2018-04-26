//mongo db connection configuration
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

//environments
var environment = "PRODUCTION";
//var environment = "DEVELOPMENT";

if (environment == 'PRODUCTION') {
    var dbURI = 'mongodb://dipesh:123456789@ds129144.mlab.com:29144/ranotest';
} else {
    var dbURI = 'mongodb://localhost:27017/admin';
}
//db connection uri
var dbURI = 'mongodb://dipesh:123456789@ds129144.mlab.com:29144/ranotest';

//mongo database connection
mongoose.connect(dbURI).then(db => {
    console.log('Db connected successfully.');
}).catch(err => {
    console.error('Db connection error.', err);
});