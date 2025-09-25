

const http = require('http')
const testingSyntax = require('./syntax')
const runtime = require('./runtime')
const logical = require('./logical')
const userRequestHandler = require('./user')
const { userInfo } = require('os')


const server = http.createServer(userRequestHandler);


// const server = http.createServer((req,res)=>{
//     console.log(req.url,req.method);
//     testingSyntax();
//     runtime();
//     logical(); 
// });



const PORT = 3002;
server.listen(PORT,()=>{
    console.log(`server running on address http://localhost:${PORT}`);
        
});