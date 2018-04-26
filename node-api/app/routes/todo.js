// load the todo model
//var Todo = require('./../models/todo');
// expose the routes to our app with module.exports
module.exports = function(router) {
    // api ---------------------------------------------------------------------
    // get all todos
    router.get('/todos', function(req, res) {
        res.send('todos');
    });
};