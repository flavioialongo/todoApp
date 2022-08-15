const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const todos = new Schema({
    task: {type: String, required: true},
    completed: {type: Boolean, required: true},
},{timestamps: true,})


const Todos = mongoose.model("Todos", todos);

module.exports = Todos;