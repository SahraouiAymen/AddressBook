const mongoose = require('mongoose');

const contact = mongoose.model('contact',{

    name : String ,
    lastname : String,
    email : String ,
    tel : String  ,
    address : String ,
    idUser : String

})

module.exports = contact ;