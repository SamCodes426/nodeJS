
// ====================== USING MODULES ======================

const http = require('http')
const requestHandler = require('./user');


const server = http.createServer(requestHandler);
const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`server running on address http://localhost:${PORT}`);
        
});