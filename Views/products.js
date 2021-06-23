const express = require('express')

const app = express()

const router = express.Router();

router.get('/products',(req,res)=>{
    res.json({product1: "Bike",product2: "Car", product3: "truck"})
})

module.exports = router