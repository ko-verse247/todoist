const mongoose = require("mongoose");

const Todo = new mongoose.Schema(
  {
    title: String,
    completed: Boolean,
  },
);

module.exports = mongoose.model("Todo", Todo);
