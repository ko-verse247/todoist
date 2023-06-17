require("dotenv").config();

const mongoose = require("mongoose");
var uri = process.env.DB_URI;

const mydb = mongoose.connect(uri).then((err, res) => {
  try {
    console.log("connected to database");
  } catch (err) {
    console.log(err);
  }
});

const app = require("./app");

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
