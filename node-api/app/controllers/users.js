var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var Users = require('../models/users');

//User login
exports.login = function(req, res, next) {
    Users.findOne({ 'email': req.body.username }, 'password', function(err, user) {
        const payload = {
            user: user._id
        };

        var token = jwt.sign(payload, 'hello-computer', {
            expiresIn: 60 * 60 * 24
        });

        if (!user) {
            return res.status(500).json({
                message: 'User not found with this email id.'
            });
        }

        if (err) {
            res.status(500).json({
                message: 'Error in logging.'
            });
        } else {
            bcrypt.compare(req.body.password, user.password, function(err, doesMatch) {
                if (doesMatch) {
                    res.status(200).json({
                        status: true,
                        token: token,
                        email: req.body.email
                    });
                } else {
                    res.status(500).json({
                        message: 'Error in logging. Username and password does not matched'
                    });
                }
            });
        }
    });
}

//user register
exports.register = function(req, res, next) {
    var register = new Users(req.body);

    if (isEmailExists(req.body.email)) {
        return res.status(500).json({
            message: 'User already exist with this email id.'
        });
    }

    //bcrypt for password hashing
    bcrypt.hash(req.body.password, 5, function(err, bcryptedPassword) {
        register.password = bcryptedPassword;
        register.save(function(err) {

            if (!err) {
                res.status(200).json({
                    message: 'You are registered successfully.'
                });
            } else {
                res.status(401).json({
                    message: 'Error in registering user.'
                });
            }
        });
    });
}

//User List
exports.getUsersList = function(req, res, next) {
    Users.find({}, function(err, users) {
        if (err)
            return next(err);
        res.status(200).json(users);
    });
}

//Create User
exports.create = function(req, res, next) {
    var create = new Users(req.body);
    create.save(function(err) {
        if (!err) {
            res.status(200).json({
                message: 'User created successfully.'
            });
        } else {
            res.status(401).json({
                message: 'Error in creating user.'
            });
        }
    });
}

//Delete User
exports.delete = function(req, res, next) {
    var id = mongoose.Types.ObjectId(req.params.user_id);
    Users.findByIdAndRemove({ _id: id }, function(err, records) {
        if (err) {
            console.log(err);
            res.status(401).json({
                message: 'Error in deleting user.'
            });
        } else {
            res.status(200).json({
                message: 'User deleted successfully.'
            });
        }
    });
}


//Logout
exports.logout = function(req, res, next) {

}

//Check email exists or not.
function isEmailExists(email) {
    Users.findOne({ 'email': email }, 'email', function(err, user) {
        if (user) {
            return true;
        } else {
            return false;
        }
    });
}