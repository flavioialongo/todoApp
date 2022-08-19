const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const user = new Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    //todos: [{type: Schema.Types.ObjectId, ref: "Todo"}],
}
,{timestamps:true})

module.exports = mongoose.model("User", user);