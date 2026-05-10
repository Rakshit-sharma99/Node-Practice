const http = require('http');
const {ans} = require('./Result');
const server = http.createServer((req , res)=>{
    
    if(req.url==='/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        
        res.write('<head>')
        
        
        res.write('</head>')
        res.write('<body>')
        res.write('<h1>Welcome to my calculator</h1>');
        res.write('<a href = "/calculator">Calculator</a><br>');
        res.write('</body>')
        res.write('</html>')
    return res.end();
}

else if(req.url==='/calculator'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    
    res.write('<head>')
    
    
    res.write('</head>')
    res.write('<body>')
    res.write('<h1>Welcome to my calculator</h1>');
    res.write('<form action ="/calculation-result" method= "POST">')
    res.write(
        '<input type="number" name="number1"> '
    )        
    res.write(
        '<input type="number" name="number2"> '
    )        
    res.write('<input type= submit value="submit">')
    res.write('</form>')
    res.write('</body>')
    res.write('</html>')
    return res.end();
}
else if (req.url==='/calculation-result' && req.method==="POST"){
    ans(req,res);


    }

})




const port  = 3001;
server.listen(port,()=>{
    console.log("Calculator has started");
    
})


