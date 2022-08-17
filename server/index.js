const express = require("express");
const app = express()
const cors = require("cors")
const port = 4000; 
const mongoose = require("mongoose")
require('dotenv').config()
const todoRouter = require("./routes/todos")
const userRouter = require("./routes/user")


app.use(cors())
app.use(express.json())
app.use("/todo", todoRouter);
app.use("/user", userRouter);

const db_uri = process.env.DB_URI;
mongoose.connect(db_uri).catch(err=>console.log(err));



app.listen(port, ()=>console.log("express is running on port: ", port))
