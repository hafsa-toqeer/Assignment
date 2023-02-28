var mongoose = require('mongoose');

const userSchema=mongoose.Schema({
    firstname:{
        type: String,
        required: true,  
    },
    lastname:{
        type: String,
        required: true,  
    },
    email:{
        type: String,
        required: true,       
    },
    password:{
        type:String,
        required: true,    
    }

});

const user =mongoose.model('User',userSchema);
module.exports = user