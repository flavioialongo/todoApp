const router = require("express").Router()
let User = require("../models/user.model")

router.route("/register").post((req,res)=>{
    console.log(req.body)
    const newUser = new User({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email,
        password : req.body.password,
    })
    newUser.save().then(()=>res.json("User Added!")).catch(err=>console.log(err));
});

module.exports = router;
