const router = require("express").Router()
let Todo = require("../models/todo.model")
const auth = require("../auth")
const User = require("../models/user.model")
router.get("/", auth, (req,res)=>{
    const user_id= res.user._id
    User.findById(user_id).then(user=>{
        Todo.find({user:user_id}).then(todos=>{
                res.json({todoList:todos, name: user.first_name})}).catch(err=>console.log(err))
            }).catch(err=>console.log(err));
})

router.route("/add").post(auth, (req,res)=>{
    
    const newTodo = {
        task: req.body.task,
        completed: req.body.completed,
        user: res.user._id,
    }
    const addTodo = new Todo(newTodo)
    addTodo.save().then(()=>res.json('Todo Added!')).catch(err=>console.log("ERRORE NELL'AGGIUNTA: ",err))
})

router.route("/update/:id").post(auth, (req,res)=>{
    
    Todo.findById(req.params.id)
    .then((todo)=>{
        todo.task=req.body.task,
        todo.completed = req.body.completed
        todo.user = res.user._id
        todo.save().then(()=>res.json("Todo updated!")).catch(err=>console.log(err))
    }).catch(err=>console.log(err))
})

router.route("/:id").delete(auth, (req,res)=>{
    Todo.findByIdAndDelete({user: res.user._id, _id:req.params.id})
    .then(()=>res.json("Todo Deleted!"))
    .catch(err=>console.log(err))
})
module.exports = router;