const jwt = require("jsonwebtoken");



//PROBLEMA IN QUESTA FUNZIONE
module.exports = function(req,res,next){
    console.log(req)
    const token = req.header("auth-token")
    if(!token){
        res.status(400).send("Not allowed");
    }
    try{
        //returna il json che abbiamo creato quando
        //abbiamo fatto jwt.sign
        const verified = jwt.verify(token, process.env.SECRET_KEY);
        res.user = verified;
        next();
    }catch(err){
        res.status(400).send("Invalid token");
    }

}