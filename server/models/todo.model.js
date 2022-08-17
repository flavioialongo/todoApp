const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const todos = new Schema({
    task: {type: String, required: true},
    completed: {type: Boolean, required: true},
    user: {type: Schema.Types.ObjectId, ref: "User"}
},{timestamps: true,})


const Todos = mongoose.model("Todos", todos);

module.exports = Todos;