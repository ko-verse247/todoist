"use strict";

const express = require("express");

const test = require("dotenv").config();

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Task = require("./schema/taskschema.js");

const app = express();

const PORT = process.env.PORT;
var uri = process.env.DB_URI;

const mydb = mongoose.connect(uri).then((err, res) => {
  try {
    console.log("connected to database");
  } catch (err) {
    console.log(err);
  }
});

app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "*"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/task", (req, res) => {
  console.log("Request to make new task");
  var schema = new Task({
    taskName: req.body.taskName,
    completed: false,
  });

  Task.create(schema)
    .then((task) => {
      console.log("Task made with id " + task._id);
      res.status(201).json(task);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/task", (req, res) => {
  console.log("Request for all tasks");
  Task.find({}).then((task) => {
    res.json(task);
  });
});

app.delete("/task/:_id", (req, res) => {
  Task.deleteOne({ _id: req.params._id })
    .then(() => {
      console.log("Deleted task with id " + req.params._id);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.patch("/task/:_id", (req, res) => {
  Task.updateOne({ _id: req.params._id }, { completed: true })
    .then(() => {
      console.log("Updated task with id " + req.params._id);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
