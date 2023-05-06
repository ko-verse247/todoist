const express = require("express");
const router = express.Router();

const {
  getAllTodos,
	createTodo,
  updateTodo,
	deleteTodo,
} = require("../controllers/Todo");

router.get("/todos", getAllTodos);
router.post("/todo/create", createTodo);
router.put("/todo/:todoId/update", updateTodo);
router.delete("/todo/:todoId/delete", deleteTodo);

module.exports = router;
