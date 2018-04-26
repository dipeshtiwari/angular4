var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    email: { type: String, unique: true, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String },
    active: { type: Boolean, default: true }
}, {
    collection: 'users',
    versionKey: false
});

module.exports = mongoose.model('Users', UserSchema);