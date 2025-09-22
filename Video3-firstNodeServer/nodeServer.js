// using require keyword

// const moduleName = require('module');


// ======================================= CREATING FIRST SERVER ====================================================


const http = require('http');

function requestListner(req, res){         //function ka naamm kuch b rkh skte h aur parameters me pehla wala request hoga aur dusra wala response
    console.log(req);
}

const server = http.createServer(requestListner)       //yhn pr humne requestistener ka reference liya h , function poora call nhi kiya 

// HTTP module ne hume ek function dia h "createServer" naam se

const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`server running on address http://localhost:${PORT}`);
    
});