const express = require("express");
const router = express.Router();
const db = require("../models");

router.get('/',(req,res)=>{
    if(req.session.user){
        db.Manatee.findAll().then(manatees=>{
            res.status(200).json(manatees)
        })
    } else {
        res.status(401).send("log in first plz")
    }
})

router.post('/',(req,res)=>{
    if(req.session.user){
        db.Manatee.create({
            name:req.body.manateeName,
            UserId:req.session.user.id
        }).then(manatee=>{
            res.status(200).json(manatee)
        })
    }else{
        res.status(401).send('log in dork')
    }
})


module.exports=router;