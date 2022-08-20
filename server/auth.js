const jwt = require("jsonwebtoken");



//PROBLEMA IN QUESTA FUNZIONE
module.exports = function(req,res,next){
    const token = req.header("auth-token")
    if(!token){
        res.status(400).send("Now allowed!");
    }else{
        try{
            //returna il json che abbiamo creato quando
            //abbiamo fatto jwt.sign
            const verified = jwt.verify(token, process.env.SECRET_KEY);
            res.setHeader("auth-token", token);
            res.user = verified;
            next();
        }catch(err){
            console.log("ERRORE:")
            res.status(400).send("Invalid token");
        }
    }
}