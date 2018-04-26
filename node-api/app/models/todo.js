var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    text: {type: String},
    done: {type: Boolean},
  }, {
    collection: 'todo'  
});

module.exports = mongoose.model('Todo', TodoSchema);