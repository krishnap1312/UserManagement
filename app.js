const express = require("express");
const mongoose = require("mongoose");
const url = 'mongodb://0.0.0.0:27017/UsersDB';

const app = express();

mongoose.connect(url)

const conn = mongoose.connection

conn.on('open', ()=>{
    console.log('connected..')
})

app.use(express.json())

const userRouter = require('./routes/users')
app.use('/users',userRouter);
app.listen(8000,()=>{
    console.log('server started');
})