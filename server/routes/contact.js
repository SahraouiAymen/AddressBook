const express = require('express');
const router = express.Router();

const contact = require('../models/contact')


router.post('/add' , ( req , res )=>{

    let con = new contact (req.body);
    con.save()
    .then(
        (result)=>{
            res.send(result)
        }
    )
    .catch((error)=>{
        res.send(error)
    })

})
router.get('/getmycontact/:idUser' , ( req , res )=>{

    let MyidUser = req.params.idUser ; 
    contact.find({idUser : MyidUser})
    .then(
        (result)=>{
            res.send(result)
        }
    )
    .catch((error)=>{
        res.send(error)
    })
    
})
router.get('/getbyid/:id' , ( req , res )=>{
    let myId = req.params.id;
    contact.findById({_id : myId})
        .then(
            (result)=>{
                res.send(result)
            }
        )
        .catch((error)=>{
            res.send(error)
        })

    
})
router.delete('/del/:id' , ( req , res )=>{

    let myId = req.params.id;
    contact.findByIdAndDelete({_id : myId})
        .then(
            (result)=>{
                res.send(result)
            }
        )
        .catch((error)=>{
            res.send(error)
        })
    
})


router.put('/edit' , ( req , res )=>{

    let myId = req.params.id;
    let data = req.body ;
    contact.findById({_id : myId} , data)

        .then(
            (result)=>{
                res.send(result)
            }
        )
        .catch((error)=>{
            res.send(error)
        })


})

module.exports = router ;