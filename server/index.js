const express = require("express");
const app = express()
const cors = require("cors")
const port = 4000; 
const mongoose = require("mongoose")
require('dotenv').config()
const db_uri = process.env.DB_URI;

const todoRouter = require("./routes/todos")
app.use(cors())
app.use(express.json())

mongoose.connect(db_uri).catch(err=>console.log(err));
app.use("/todo", todoRouter);

app.get('/express_backend', (req, res) => { //Line 9
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
  });

app.listen(port, ()=>console.log("express is running on port: ", port))
