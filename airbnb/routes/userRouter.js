const express = require('express');
const userRouter = express.Router();




userRouter.get("/",(req , res , next)=>{
    res.send(`
        <h1>Welcome to Airbnb</h1>
        <a href = "/host/home">Add Home</a>
        
        `);
    })

module.exports= userRouter;
