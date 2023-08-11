const express = require('express');

const router = express.Router();

const User = require('../models/user');

const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');

    router.post('/register' , ( req , res )=>{
        let data = req.body ;
        let usr = new User (data);
        // cryptage de mot de passe 
        usr.password = bcrypt.hashSync(data.password , 10 );

        usr.save()
        .then(
            (result)=>{
                res.send(result)
            }
        )
        .catch((error)=>{
            res.send(error)
        })
        
    })
    router.post('/login' , ( req , res )=>{

        let data = req.body ; 
        User.findOne({email : data.email})
        .then(
            (result)=>{
                if (!result){
                    res.send('Invalid E-mail or password')
                } else {
                    let valid = bcrypt.compareSync( data.password , result.password);
                    if(!valid){
                        res.send('Invalid email or password');
                    }else{

                        let payload = { 
                            _id : result._id , 
                            name : result.name, 
                            lastname : result.lastname,
                            email : result.email
                        }

                        let token = jwt.sign( payload , '123456789' ) ;
                        res.send({ myToken : token});
                    }
                }
            }
        )
        .catch((error)=>{
            res.send(error)
        })

    })


module.exports = router ;