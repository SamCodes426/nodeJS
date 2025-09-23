const http = require('http');
const server = http.createServer((req,res)=>{
    console.log(req.url,req.headers,req.method);

    if (req.url === '/home') {
        res.write(`<h1>Welcome to Home</h1>`)
        return res.end();
    }
    else if (req.url==='/men') {
        res.write(`<h1>Mens section</h1>`)
        return res.end();
    }
    else if (req.url==='/women') {
        res.write(`<h1>Womens Section</h1>`)
        return res.end();
    }
    else if (req.url==='/kids') {
        res.write(`<h1>Kids Section</h1>`)
        return res.end();
    }
    else if (req.url==='/cart') {
        res.write(`<h1>Cart</h1>`)
        return res.end();
    }
        res.write(`<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    <nav>
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/men">Men</a></li>
            <li><a href="/women">Women</a></li>
            <li><a href="/kids">Kids</a></li>
            <li><a href="/cart">Cart</a></li>
        </ul>
    </nav>
</body>
</html>`);
return res.end();










})

PORT = 3001;
server.listen(PORT,()=>{
    console.log(`server started at http://localhost:${PORT}`);
    
})