const express = require('express');

const app  =express();

app.use(express.urlencoded());


app.get("/",(req , res , next)=>{
    console.log("This is your home page , go to contact page",req.body);
    res.send('  <h1>Home page</h1><a href="/contact-us">Contact Us </a>');
    
})
app.get("/contact-us",(req , res , next)=>{
    console.log("User Entered contact us page");

    res.send(`
        <h1>COntact-us page</h1>
        <form action ="/contact-us" method = "POST">
        <input type = "name" name= "Name" placeholder="Enter Your name ">
        <input type = "email" name= "email" placeholder="Enter Your Email ">
        <input type="submit">
        </form>
        `)
    
})

app.post("/contact-us",(req,res)=>{
    console.log("Data was submitted succesfully",req.body);
    res.send(`
        <p>Name: ${req.body.Name}</p>
        <p>Email: ${req.body.email}</p>
        `)
})


app.listen(3000,()=>{
    console.log("Server is running , test your set.");
    
})

