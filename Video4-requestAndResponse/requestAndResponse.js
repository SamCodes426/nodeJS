const http = require('http');

// function requestListner(req, res){         
//     console.log(req);
//     process.exit();   stops the server   
// }

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    
   if (req.url === '/') {
        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title> Learning Node Js </title></head>')
        res.write('<body><h1> Welcome to Home </h1></body>')
        res.write('</html>')
        return res.end();
   }else if (req.url === '/products') {
        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title> Learning Node Js </title></head>')
        res.write('<body><h1> Check out our product </h1></body>')
        res.write('</html>')
        return res.end();
   }else{
        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title> Learning Node Js </title></head>')
        res.write('<body><h1> SAM_SO_COOL </h1></body>')
        res.write('</html>')
        res.end();
   }
   
 
})       

const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`server running on address http://localhost:${PORT}`);
        
});