const router = require("express").Router()
let Todo = require("../models/todo.model")
const auth = require("../verifyToken")
router.get("/", auth, (req,res)=>{
    console.log("IM IN")
    res.send("ao")
    //Todo.find().then(users=>res.json(users)).catch(err=>console.log(err))
})

router.route("/add").post(auth, (req,res)=>{
    const newTodo = {
        task: req.body.task,
        completed: req.body.completed,
        user: req.body.user_id,
    }
    const addTodo = new Todo(newTodo)
    addTodo.save().then(()=>res.json('Todo Added!')).catch(err=>console.log(err))
})

router.route("/update/:id").post(auth, (req,res)=>{
    Todo.findById(req.params.id)
    .then((todo)=>{
        todo.task=req.body.task,
        todo.completed = req.body.completed
        todo.save().then(()=>res.json("Todo updated!")).catch(err=>console.log(err))
    }).catch(err=>console.log(err))
})

router.route("/:id").delete(auth, (req,res)=>{
    Todo.findByIdAndDelete(req.params.id)
    .then(()=>res.json("Todo Deleted!")).catch(err=>console.log(err))
})
module.exports = router;