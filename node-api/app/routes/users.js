var multer = require('multer')
var upload = multer({ dest: 'uploads/' })

// load the User model
var Users = require('../controllers/users');
// expose the routes to our app with module.exports
module.exports = function(app) {

    // get all users
    app.get('/user/getAll', Users.getUsersList);

    // Create User
    app.post('/user/create', Users.create);

    // Delete User
    app.delete('/user/:user_id', Users.delete);

    // create todo and send back all todos after creation
    app.post('/user/register', Users.register);

    // User login
    app.post('/user/login', Users.login);

    // app.post('/user/image', upload.single('avatar'), function(req, res) {
    //     console.log('req', req.file);
    //     res.json({
    //         message: "file uploaded"
    //     });
    // });
};