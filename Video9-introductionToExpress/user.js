const http = require('http');
const fs = require('fs');

const userRequestHandler = (req,res)=>{
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
   
   
   

   else if(req.url.toLowerCase() === '/submit-details'&& req.method === 'POST'){
          const body = [];
          req.on('data',(chunk)=>{
               console.log(chunk);
               body.push(chunk);   
          });
          req.on('end',()=>{
                const fullBody = Buffer.concat(body).toString()
                console.log(fullBody);
                const params = new URLSearchParams(fullBody);       
                
            
                
                const bodyObject = Object.fromEntries(params);      //the commented code above is complex so this is the better alternative for it.
                console.log(bodyObject);
        
               fs.writeFile('user.txt',JSON.stringify(bodyObject),error=>{              //isliye humne yhn pr async code use kiya taki baki ke kaam ruk na jaye
               console.log(`data written successfully`);
               
               res.statusCode = 302;         
               res.setHeader('Location','/');
               return res.end();
            })
    });        
}
   
   
   
   
   
   
   
   
   else{
        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title> Learning Node Js </title></head>')
        res.write('<body><h1> SAM_SO_COOL </h1></body>')
        res.write('</html>')
        return res.end();
   }
   
 
}     

module.exports = userRequestHandler;