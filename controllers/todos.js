const Todo = require('../models/todo');

module.exports = {
    index,
    new: newTodo, 
    delete: deleteTodo,
    update

}
function newTodo(req,res) { 
    console.log("hell yea bitch");
    Todo.create(req.body); 
    res.redirect('/');
}
function index(req, res) {
    res.render('todos/index', {
        todos: Todo.getAll()
    });
}

function deleteTodo(req,res)  { 
    Todo.deleteOne(req.params.id)
    res.redirect('/');
}

function update (req, res) {
    Todo.getOne(req.body, req.params.id);
    res.redirect('/');
}