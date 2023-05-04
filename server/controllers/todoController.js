import mongoose from "mongoose";
import { Todo } from "../models/todoModel.js";

const getTodos = async (req, res) => {
  const todos = await Todo.find({}).sort({ createdAt: -1 });

  res.status(200).json(todos);
};

const createTodo = async (req, res) => {
  const { task } = req.body;

  if (!task) {
    return res.status(400).json({ error: "할 일을 추가하세요." });
  }

  try {
    const todo = await Todo.create({ task });
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "그런 todo ID가 없습니다." });
  }

  const todo = await Todo.findOneAndDelete({ _id: id });

  if (!todo) {
    return res.status(400).json({ error: "그런 todo가 없습니다." });
  }

  res.status(200).json(todo);
};

const updateTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "그런 todo ID가 없습니다." });
  }

  const todo = await Todo.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!todo) {
    return res.status(400).json({ error: "그런 todo가 없습니다." });
  }

  res.status(200).json(todo);
};

export { getTodos, createTodo, deleteTodo, updateTodo };
