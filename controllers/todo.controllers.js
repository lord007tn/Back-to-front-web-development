const Todo = require("../models/todo.models");

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    return res.status(200).json(todos);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getTodo = async (req, res) => {
  const id = req.params.todoId;
  try {
    const todo = await Todo.findById(id);
    return res.status(200).json(todo);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const createTodo = async (req, res) => {
  const newTodo = new Todo({
    title: req.body.title,
    content: req.body.content,
  });
  try {
    const savedTodo = await newTodo.save();
    return res.status(201).json(savedTodo);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const updateTodo = async (req, res) => {
  const id = req.params.todoId;
  const data = req.body;
  const { ...dataToUpdate } = data;
  try {
    const editTodo = await Todo.findByIdAndUpdate(id, dataToUpdate, {
      new: true,
    });
    return res.status(200).json(editTodo);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const deleteTodo = async (req, res) => {
  const id = req.params.todoId;
  try {
    const delTodo = await Todo.findByIdAndDelete(id);
    return res.status(200).json(delTodo._id + " is deleted");
  } catch (err) {
    return res.status(500).json(err);
  }
};
module.exports.getTodos = getTodos;
module.exports.getTodo = getTodo;
module.exports.createTodo = createTodo;
module.exports.deleteTodo = deleteTodo;
module.exports.updateTodo = updateTodo;
