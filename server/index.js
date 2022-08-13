const express = require("express");
const app = express()
const port = process.env.PORT || 5000; 

app.get('/express_backend', (req, res) => { //Line 9
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
  });

app.listen(port, ()=>console.log("express is running"))
