const router = require("express").Router()
let User = require("../models/user.model")
const {loginValidation, registerValidation} = require("../validation")
const bcrypt = require("bcryptjs")
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
                newUser.save().then((savedUser)=>res.send({user: savedUser._id}));
            }catch (err){
                res.status(400).send(err);
            }
    }
    
});

module.exports = router;
