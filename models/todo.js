const Todos = [];

module.exports = {
    getAll,
    create,
    deleteOne,
    getOne
};

function create(todo) { 
    Todos.push(todo)
    console.log('create');
}

function getAll() {
    return Todos;
}

function deleteOne(id) {
    Todos.splice(id, 1);  

}
function getOne(body, id) {
    Todos.splice(id, 1, body)
}
