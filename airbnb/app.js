const express = require('express');


const app = express();

app.use((req , res , next)=>{
    console.log(req.url, req.method);
    next();
});

app.use(express.urlencoded());




app.get("/",(req , res , next)=>{
    res.send(`
        <h1>Welcome to Airbnb</h1>
        <a href = "/home">Add Home</a>
        
        `);
    })
    app.get("/home",(req , res , next)=>{
        res.send(`
            <h1>Register Your Home Here to Airbnb</h1>
            <form action ="/home" method = "POST">
            <input type = "text" name = "Housename" placeholder="Enter name of your house">
            <input type ="submit">
            </form>
            `);
        })
        
        
        app.post("/home",(req , res , next)=>{
            console.log(req.body);
            
            res.send(`
                <h1>Home Registered Succesfully ✅</h1>
                <a href = "/">Go To Home</a>
     
        `);
})









const port = 3000;
 app.listen(port,()=>{
    console.log(`Server runnning at localhost${port}`);
    
 })