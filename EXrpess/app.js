const express = require('express');

const app = express();

 const http = require('http').createServer(app);
 app.use((req ,res ,  next)=>{
    console.log("Came in first middleware", req.url, req.method);
    next();
    
 });
 app.use((req ,res ,  next)=>{
    console.log("Came in Second middleware", req.url, req.method);
    next();
 });

const port = 3001;
http.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
); 