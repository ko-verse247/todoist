const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router
  .route("/")
  .get(taskController.getTasks)
  .post(taskController.addTask);

router
  .route("/:_id")
  .delete(taskController.deleteTask)
  .patch(taskController.updateTask);

  module.exports = router;