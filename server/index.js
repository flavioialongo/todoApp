const express = require("express");
const app = express()
const cors = require("cors")
const port = 4000; 
const mongoose = require("mongoose")
require('dotenv').config()
const todoRouter = require("./routes/todos")
const cookieParser = require("cookie-parser");
const sessions = require('express-session');

app.use(cors())
app.use(express.json())
app.use("/todo", todoRouter);
app.use(cookieParser());
const oneDay = 1000*60*60*24;
app.use(sessions({
  secret: process.env.SESSION_KEY,
  saveUninitialized:true,
  cookie: { maxAge: oneDay },
  resave: false
}));





const db_uri = process.env.DB_URI;
mongoose.connect(db_uri).catch(err=>console.log(err));












app.listen(port, ()=>console.log("express is running on port: ", port))
