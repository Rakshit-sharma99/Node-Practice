const express = require('express')

const s = express()


s.use(express.json())
const title=[]
s.post('/title',(req,res)=>{
    title.push(req.body)
    console.log(req.body);


    res.status(201).json({
        message:"Title recived",
        title
    })
    
 sfgbfhnmghjmhjk,juol.ikjkm,hk,hnnmjh mn;'/
 dfegttiku;o'[p;";;dbg,;/l
 '
 rgtry
 ;
 wtu]
 ']
 '
})


s.get('/title', (req,res)=>{
    res.status(200).json({
        message:"here are the title",
        title
    })
})

s.patch('/title/:index',(req,res)=>{
    const index = req.params.index
    const change = req.body.title

    title[index].title = change

    res.status(200).json({
        message:"Changed succesfully",
        title
    })

})


s.delete('/title/:index',(req,res)=>{
    const index = req.params.index
   title.splice(index,1)

    res.status(200).json({
        message:"Deleted "
    })

})

module.exports= s