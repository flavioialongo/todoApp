const router = require("express").Router()
let User = require("../models/user.model")
const {loginValidation, registerValidation} = require("../validation")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")


router.route("/register").post(async (req,res)=>{
    const result = registerValidation(req.body);
    if(result.error!=null){
        res.status(400).send(result.error.details[0].message)
    }else{
        const emailExists = await User.findOne({email:req.body.email});
        if(emailExists){
            return res.status(400).send("User already exists!");
        }
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(req.body.password, salt)
            const newUser = new User({
                first_name : req.body.first_name,
                last_name : req.body.last_name,
                email : req.body.email,
                password : hashPassword,
                });
            try{
                newUser.save().then((savedUser)=>res.send(savedUser._id));
            }catch (err){
                res.status(400).send(err);
            }
    }
    
});
router.route("/login").post(async (req,res)=>{
    
    const result = loginValidation(req.body);
    if(result.error!=null){
        res.status(400).send(result.error.details[0].message);
    }
    const user = await User.findOne({email:req.body.email});
    
    if(!user){
        return res.status(400).send("User does not exist! ")
    }
    //validate password
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    
    if(!validPassword){
        res.status(400).send("Invalid password!");
    }
    
    const token = jwt.sign({_id: user._id}, process.env.SECRET_KEY);
    res.header("auth-token", token).send(token);
})
module.exports = router;
