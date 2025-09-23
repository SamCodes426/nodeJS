const {sumRequestHandler} = require('./sum')

const requestHandler = (req,res)=>{
    console.log(req.url,req.method);
    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html')
        res.write(`<html>
                    <head>
                        
                        <title>Home</title>
                    </head>
                    <body>
                        <h1>Welcome to Calculator</h1>
                        <a href="/calculator">Go to Calculator</a>
                    </body>
                    </html>`)
                    return res.end();
    }
    else if (req.url.toLowerCase() === '/calculator') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html>
                    <head>
                        
                        <title>Home</title>
                    </head>
                    <body>
                        <h1>Here is the Calculator</h1>
                        <form action="/calculate-result" method="post">
                            <input type="text" placeholder="First number" name="first">
                            <input type="text" placeholder="Second number" name="second">
                            <input type="submit" name="submit">
                        </form>
                    </body>
                    </html>`);
                    return res.end();
    }
    else if (req.url.toLowerCase()==='/calculate-result'&& req.method === 'POST') {
        return sumRequestHandler(req,res);
        
    }
    res.setHeader('Content-Type', 'text/html');    
    res.write(`<html lang="en">
                    <head>
                        
                        <title>Home</title>
                    </head>
                    <body>
                        <h1>404 Page does not exist</h1>
                        <a href="/">Go to Home</a>
                    </body>
                    </html>`)
                    return res.end();
}

exports.requestHandler = requestHandler