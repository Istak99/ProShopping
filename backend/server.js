// const express= require('express')
// const dotenv = require('dotenv')
// const products = require('./data/products')

import express from  'express'
import dotenv from  'dotenv'
import connectDB from './config/db.js'
import products from  './data/products.js'

dotenv.config()

connectDB() 

const app = express()

app.get('/', (req,res)=>{
    res.send('Api is running...Do not Worry....')
})

app.get('/api/products', (req,res)=>{
    res.json(products)
    //res.send(products)
})

app.get('/api/products/:id', (req,res)=>{
    const product=products.find(p => p._id === req.params.id)
    res.json(product)
    //res.send(products)
})

const PORT= process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))