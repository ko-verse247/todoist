const mongoose = require("mongoose");

const Schema = mongoose.Schema;

module.exports = mongoose.model(
  "Task",
  new Schema({
    taskId: { type: Number },
    taskName: { type: String },
    completed: { type: Boolean }
  }),
  "task"
);