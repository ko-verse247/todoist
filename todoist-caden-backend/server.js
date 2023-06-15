const express = require("express");

require('dotenv').config
console.log(process.env)

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Task = require("./schema/taskschema.js");

const app = express();

const PORT = 3000;
var uri = process.env.DB_URI

const mydb = mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/task", (req, res) => {
    console.log("POST request made")
    var schema = new Task({
        taskId: req.body.taskId,
        taskName: req.body.taskName,
        completed: false
    })
    
    schema.save((err) => {
        if(err) {
            console.log(err)
            res.sendStatus(503)
        } else {
            res.status(200).send('Create is successful')
        }
    })
})

app.get("/task", (req, res) => {
    Task.find((err, body) => {
        if(err) {
            console.log(err)
            res.sendStatus(503)
        } else {
            res.status(200).json(body)
        }
    })
})

app.delete("/task/:taskId", (req, res) => {
    Task.deleteOne({taskId: req.params.taskId},(err, body) => {
        if(err) {
            console.log(err)
            res.sendStatus(503)
        } else {
            res.status(200).send('Delete success')
        }
    })
})

app.patch("/task/:id", (req, res) => {
    Album.findOneAndUpdate({taskId: req.params.taskId}, req.body, (err) => {
        if(err) {
            console.log(err)
            res.sendStatus(503)
        } else {
            res.status(200).send('Patch is successful')
        }
    })
})

app.listen(PORT, ()=>{
    console.log('Listening on port ' + PORT)
})