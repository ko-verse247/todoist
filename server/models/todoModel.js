import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  task: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Todo = mongoose.model('Todo', todoSchema);
export { Todo };
