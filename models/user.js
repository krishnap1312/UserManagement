const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    fristname:{
        type: String,
        required : true
    },
    
    lastname:{
        type: String,
        required : true
    },
    
    email:{
        type: String,
        required : true
    },
    password:{
        type: String,
        required : true
    },
    city:{
        type: String,
        required : true
    },
    contact:{
        type: Number,
        required : true
    },
});

module.exports = mongoose.model('User',userSchema)