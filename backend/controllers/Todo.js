const Todo = require("../models/Todo");

exports.getAllTodos = (req, res) => {
  Todo.find()
    .then((todos) => res.json(todos))
    .catch((err) => {
      console.error(err);
    })
};

exports.createTodo = (req, res) => {
  const todo = new Todo(req.body);
  todo.save()
    .then(task => res.json(task))
    .catch(err => console.error(err));
};

exports.updateTodo = (req, res) => {
  const id = req.params.todoId;
  const { title, completed } = req.body;
  Todo.findByIdAndUpdate(id, { title, completed })
    .then(updatedTodo => res.json(updatedTodo._id))
    .catch(err => console.error(err));
};

exports.deleteTodo = (req, res) => {
  const id = req.params.todoId;
  Todo.findByIdAndDelete(id)
    .then(deletedTodo => res.json(deletedTodo._id))
    .catch(err => console.error(err));
};
