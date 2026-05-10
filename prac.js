const express = require('express');

const serve = express()

serve.use(express.json())

const names = []
serve.post('/name',(req,res)=>{
    names.push(req.body)
    console.log(req.body)

    res.status(201).json({
        message:"Name added succesfull"
    })
})
serve.get('/name',(req,res)=>{

    res.status(200).json({
        message:"here are the names",
        names:names
    })
})



serve.listen(3500,()=>{
console.log("Seerver Started");

})

serve.delete('/names/:index',(req,res)=>{
    const index = req.params.index
    delete names[index]
    res.status(200).json({
        message:"Names at  is deleted"
    })


})

serve.patch('/name/:index',(req,res)=>{
    const index  = req.params.index
    const namechange= req.body.names

    names[index].names = namechange

res.status(200).json({
    message: "updated succesfully",
    names:names
})

})





module.exports = serve