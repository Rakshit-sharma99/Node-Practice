const http = require('http');

const server = http.createServer((req , res)=>{
    console.log(req.url,req.method,req.headers);

    if(req.url==='/home'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head>')
        res.write('<body>')
        res.write('<h1>Hello From Home page</h1>');

    
        res.write('</body>')
        
        res.write('</head>')
        res.write('</html>')
return res.end();
        
    }

    else if(req.url.toLowerCase()==='/men'){
              res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head>')
        res.write('<body>')
        res.write('<h1>Hello From Mens page</h1>');

    
        res.write('</body>')
        
        res.write('</head>')
        res.write('</html>')

    }
    else if(req.url.toLowerCase()==='/women'){
              res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head>')
        res.write('<body>')
        res.write('<h1>Hello From WoMens page</h1>');

    
        res.write('</body>')
        
        res.write('</head>')
        res.write('</html>')
return res.end();

    }
    else if(req.url.toLowerCase()==='/kids'){
              res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head>')
        res.write('<body>')
        res.write('<h1>Hello From Kids page</h1>');

    
        res.write('</body>')
        
        res.write('</head>')
        res.write('</html>')
return res.end();

    }
    res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head>')
        res.write('<body>')
        res.write('<a href=/home>Home</a><br><br>');
        res.write('<a href=/men>men</a><br><br>');
        res.write('<a href=/women>women</a><br><br>');
        res.write('<a href=/kids>kids</a><br><br>');

    
        res.write('</body>')
        
        res.write('</head>')
        res.write('</html>')
return res.end();
})
const port = 3000
server.listen(port,()=>{
    console.log("Server is listening to rakshit ");
        
})