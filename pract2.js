 const http = require('http');
 const fs = require('fs');

 const server =  http.createServer((req, res)=>{
    // console.log(req.url,req.method, req.headers);


if(req.url==='/'){

    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Hello Rakshit</title>');
    
    res.write('<body>');
    res.write('<h1>Enter Details:</h1>');
    res.write('<form action="/submit-details" method="POST">')
    res.write('<input type="name" name = "username"><br><br>');
    res.write('<label for="male"> Male</label>');
    res.write('<input type="radio" id= "male"? name = "gender" value="male">');
    res.write('<label for="Female"> FeMale</label>');
    res.write('<input type="radio" id= "Female"? name = "gender" value="Female">');
    
    res.write('<br><br>');
    res.write('<input type="submit" value="Submit">');
    res.write('</form>');
    
    res.write('</body>');

    res.write('</body>');
    res.write('</html>');

return res.end();
}
else if(req.url.toLowerCase()==='/submit-details'&& req.method=="POST"){
fs.writeFileSync('user.txt','Rakshti Sharamm');
req.on('data',(chunk)=>{
    console.log(chunk.toString());
    const output = new URLSearchParams(chunk.toString());
    
    for(let [key, value] of output){
        console.log(key, value);
    }
})


res.statusCode=302//redirect
res.setHeader('Location','/');
}
res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('<head>');
res.write('<h1>404 Rakshit got u wrong</h1>');
res.write('</head>');
res.write('</html>');


});
const PORT = 3000;
server.listen(PORT,()=>{
    console.log("Server is listening ot rakshit sharam ");
    
})

