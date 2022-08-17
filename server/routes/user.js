const router = require("express").Router()
const User = require("../models/user.model")

router.route("/register").post((req,res)=>{
    const {first_name, last_name, email, password} = req.body;
    const res = User.exists({email: email})
    if(!res){
        let newUser = new User({
            first_name: first_name,
            last_name: last_name,
            email: email, 
            password: password,
        })
        newUser.save().then(()=>res.json("User Added!"))
    }else{
        res.json("User already exists!")
    }
});

