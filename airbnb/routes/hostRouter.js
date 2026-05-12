const express = require('express');
const hostRouter = express.Router();

hostRouter.get("/host/home",(req , res , next)=>{
        res.send(`
            <h1>Register Your Home Here to Airbnb</h1>
            <form action ="/host/home" method = "POST">
            <input type = "text" name = "Housename" placeholder="Enter name of your house">
            <input type ="submit">
            </form>
            `);
        })
        
        
    hostRouter.post("/host/home",(req , res , next)=>{
            console.log(req.body);
            
            res.send(`
                <h1>Home Registered Succesfully ✅</h1>
                <a href = "/">Go To Home</a>
     
        `);
            });
module.exports= hostRouter;