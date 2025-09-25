const sumRequestHandler = (req,res)=>{
    console.log("1. sending response",(req.url));
    const body = [];
    let result;
    
    
    req.on('data',(chunk)=>{                    //( ye async code h )jb data aeega uske baad ye execute krna h
        body.push(chunk);
        console.log("2. chunk came");
    });
    
    
    req.on('end',()=>{
        console.log("3. End event came");                       //( ye async code h )pehele data aaega fir response jaega
        const bodyStr = Buffer.concat(body).toString();
        const params = new URLSearchParams(bodyStr);
        const bodyObj = Object.fromEntries(params);
        const result = Number(bodyObj.first) + Number(bodyObj.second);
        console.log(result);
        
    
   
});
console.log("4. sending respose");                              //yhn pr ye kisi ka wait nhi kr rha (ye sync code h )
                                                            // iska sahi code Video5 wale folder me h 
res.setHeader('Content-Type', 'text/html');             //ye problem solve krne ke liye iske end wale code me dalna pdega jb b response bhejenge toh ye b bhj denge uske sath async ke queue me jo last hoga uske sath
    res.write(`<html>                                   
                    <head>
                        
                        <title>Home</title>
                    </head>
                    <body>
                        <h1>Your Sum is ${result}</h1>
                        <a href="/calculator">Go to Calculator</a>
                    </body>
                    </html>
                    `);
                    return res.end();
                }

exports.sumRequestHandler = sumRequestHandler


