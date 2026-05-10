//Server Create krna
const express = require('express');

const app = express()
app.use(express.json()) 

const notes = [] 
app.post('/notes',(req,res)=>{
    notes.push(req.body)
    console.log(req.body);

    res.status(201).json({
        message:"Connected Succesfully"
    })
    
})

app.get('/notes',(req,res)=>{
    res.status(200).json({
        message:"notes Fetched Succesfully",
        notes:notes
    })
})


app.delete('/notes/:index',(req,res)=>{
    const index = req.params.index

    delete notes[index]
    res.status(200).json({
        message: "Note deleted successfully"
    })
})


module.exports = app