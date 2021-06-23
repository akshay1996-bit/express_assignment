const express = require('express')

const app = express()

const router = express.Router();

router.get('/users',(req,res)=>{
    res.json({user1: "AAA",user2: "BBB", user3: "CCC"})
})

module.exports = router