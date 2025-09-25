const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method);
    
   if (req.url === '/') {
        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title> Learning Node Js </title></head>')
        res.write('<body><h1> Enter your details </h1>')
        res.write('<form action="/submit-details" method="POST">')
        res.write('<input type="text" name="username" placeholder="Enter your name"><br>')
        res.write('<label for="male" >Male</label>')
        res.write('<input type="radio" id="male" name="gender" value="male">')
        res.write('<label for="female" >Female</label>')
        res.write('<input type="radio" id="female" name="gender" value="female"><br>')
        res.write('<input type="submit" value="Submit">')
        res.write('</form>')
        res.write('</body>')
        res.write('</html>')
        return res.end();
   }
   else if (req.url === '/products') {
        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title> Learning Node Js </title></head>')
        res.write('<body><h1> Check out our product </h1></body>')
        res.write('</html>')
        return res.end();
   }
   
   
   
// ======================= CHUNK BUFFERING =======================
   
   
   else if(req.url.toLowerCase() === '/submit-details'&& req.method === 'POST'){
          const body = [];
          req.on('data',(chunk)=>{
               console.log(chunk);
               body.push(chunk);        //this is adding the buffer data into the array
          });
          req.on('end',()=>{
               const fullBody = Buffer.concat(body).toString()        //this converts the buffer data into string 
               console.log(fullBody);
               
          })
          fs.writeFileSync('user.txt','Samarpit')
          res.statusCode = 302;         
          res.setHeader('Location','/');
          return res.end();
   }
   
   
   
   
   
   
   
   
   else{
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