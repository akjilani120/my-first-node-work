const express = require('express');
const cors = require("cors")
const app =express()

const port =process.env.PORT || 5000 ;
app.use(cors())
app.use(express.json())
app.get("/" , (req, res) =>{
    res.send("YaY I can do second part of node.And I can seond step on the node js. I can do third step")
})
app.post( '/user', (req, res) =>{
    console.log("request" , req.body)
    const user =req.body
    user.id=users.length + 1
    users.push(user)
    res.send(user)
})
const users=[
    {id:1, name:"Shain",  email:"shahin@gmail.com"},
    {id:2, name:"shajid",  email:"shajid@gmail.com"},
    {id:3, name:"shah alom",  email:"alon@gmail.com"},
    {id:4, name:"shakinn",  email:"shakin@gmail.com"},
    {id:5, name:"ajom",  email:"ajom@gmail.com"},
    {id:6, name:"alim",  email:"alim@gmail.com"},
]
app.get("/users" , (req , res) =>{
    if(req.query.name){
        const search=req.query.name.toLocaleLowerCase();
        const matched =users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(matched)         
        
    }
    else{
        res.send(users)
    }
    
   
})
app.get("/user/:id", (req, res) =>{
    const id = req.params.id
    const user= users.find( u => u.id == id)
    res.send(user)
})
app.listen(port, () =>{
    console.log("Yah I can do it", port)
})
