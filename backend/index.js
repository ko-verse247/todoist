
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

const port = 8000;

const todoRoutes = require("./routes/Todo");

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/todoapp", {
  })
  .then(() => {
    console.log("CONNECTED TO DATABASE");
  });

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.use(cors());
app.use(bodyParser.json());
app.use("/api", todoRoutes);

app.get('/',(req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});
