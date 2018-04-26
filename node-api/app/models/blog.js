var mongoose = require('mongoose');

var BlogSchema = new mongoose.Schema({
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    title: {type: String},
    description: {type: String},
    status: {type: Boolean, default: true},
  }, {
    collection: 'blog'
});

module.exports = mongoose.model('Blog', BlogSchema);