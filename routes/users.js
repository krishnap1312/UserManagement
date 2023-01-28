const express = require("express");
const User = require('../models/user') 
const routers = express.Router()

routers.get('/', async (req,res)=>{
    // console.log('Get Request');
    // res.send('get request')
    try {
        const users = await User.find()
        res.json(users);
    } catch (error) {
        res.send('error')
    }
})

routers.get('/:id', async (req,res)=>{
    
    try {
        const user = await User.findById(req.params.id)
        res.json(user);
    } catch (error) {
        res.send('No User Found')
    }
})


routers.patch('/:id', async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        user.fristname = req.body.fristname
        user.lastname = req.body.lastname
        user.email = req.body.lastname
        user.password = req.body.password
        user.city = req.body.city
        user.contact = req.body.contact
        const u1 = await user.save()
        res.json(u1);
    } catch (error) {
        res.send('Error'+error)
    }
})


routers.post('/', async(req, res)=>{
    const user = new User({
        "fristname" :  req.body.fristname,
        "lastname" : req.body.lastname,
        "email" : req.body.email,
        "password" : req.body.password,
        "city" : req.body.city,
        "contact" : req.body.contact
    })
    try {
        const u1 = await user.save();
        res.json(u1)
    } catch (error) {
        res.send('error')
    }
})

module.exports = routers