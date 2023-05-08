
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

const port = process.env.PORT || 8000;

const todoRoutes = require("./routes/Todo");

const app = express();

const uri = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : "mongodb://127.0.0.1:27017/todoapp";

mongoose
  .connect(uri, {
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
