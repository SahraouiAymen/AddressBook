const mongoose = require('mongoose');

const User = mongoose.model('user' , {
    name : String , 
    lastname : String ,
    email : String ,
    password : String 
})



module.exports = User ;