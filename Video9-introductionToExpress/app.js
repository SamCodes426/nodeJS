
//external module
const express = require('express')

//local module
// const userRequestHandler = require('./user')


const app = express();


app.get("/",(req,res,next)=>{
    console.log(`Came in first middleware`,req.url,req.method);
    // res.send("<p>Welcome to girija nikunj</p>")
    next();
});


app.post("/submit-details",(req,res,next)=>{
    console.log(`Came in second middleware`,req.url,req.method);
    res.send("<p>I am Samar</p>");
   
});

app.use("/",(req,res,next)=>{
    console.log(`Came in another middleware`,req.url,req.method);
    res.send("<p>Came from another middleware</p>")
    next();
});


const PORT = 3002;
app.listen(PORT,()=>{
    console.log(`server running on address http://localhost:${PORT}`);
        
});