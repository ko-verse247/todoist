"use strict";

const express = require("express");

const taskRoutes = require("./routes/taskRoutes.js");

const app = express();

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://todoist-caden.onrender.com" //Access to this API is only allowed for hosted site
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());
app.use("/task", taskRoutes);

module.exports = app;
