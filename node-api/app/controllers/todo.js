var Todo = require('../models/todo');

exports.listAll = function (req, res, next) {
  Todo.find({}, function (err, todo) {
      if (err)
        return next(err);
      res.json(todo);
  });
}

exports.createTodo = function(req, res, next){
    var newTodo = new Todo({text:req.body.text,done:req.body.done});
  newTodo.save(function (err) {
      if (err)
        return next(err);
      res.json({
        message: 'Todo created'
      });
  });
}