const express = require('express');

const app = express();

const Admin = true

const prodRouter = require('./Views/products')
const userRouter = require('./Views/users')


// app.use((req,res,next)=>{
//     if(isAdmin)
//     {
//         next()
//     }
//     else{
//         res.json('Access Denied')
//     }
// })
const isAdmin = (req,res,next)=>{
    if(Admin)
    {
        next()
    }
    else{
        res.status(401).json("Access Denied")
    }
}
app.use('',isAdmin,prodRouter)
app.use('',isAdmin,userRouter)

app.use('*',(req,res)=>{
    res.status(404).json("Page Not Found")
    
})

app.listen(4000,()=>{
    console.log('server is running')
})