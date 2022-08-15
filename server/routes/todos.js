const router = require("express").Router()
let Todo = require("../models/todo.model")

router.route("/").get((req,res)=>{
    Todo.find().then(users=>res.json(users)).catch(err=>console.log(err))
})

router.route("/add").post((req,res)=>{
    const newTodo = {
        task: req.body.task,
        completed: req.body.completed,
    }
    const addTodo = new Todo(newTodo)
    addTodo.save().then(()=>res.json('Todo Added!')).catch(err=>console.log(err))
})

router.route("/update/:id").post((req,res)=>{
    Todo.findById(req.params.id)
    .then((todo)=>{
        console.log(todo)
        todo.task=req.body.task,
        todo.completed = req.body.completed
        todo.save().then(()=>res.json("Todo updated!")).catch(err=>console.log(err))
    }).catch(err=>console.log(err))
})

router.route("/:id").delete((req,res)=>{
    Todo.findByIdAndDelete(req.params.id)
    .then(()=>res.json("Todo Deleted!")).catch(err=>console.log(err))
})
module.exports = router;