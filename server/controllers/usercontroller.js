const mongoose = require('mongoose')
let U = mongoose.model('User')
const bcrypt = require('bcrypt');
const session = require('express-session');

module.exports ={
    newUser : (req,res) =>{
        if(req.body.password != req.body.confirm_password) (err) =>{
           res.json(err);
        }
        bcrypt.hash(req.body.password,10,(err,hashed_password)=>{
            let user = new U({
                name:req.body.name,
                email:req.body.email,
                password:hashed_password
            })
            console.log(user);
            user.save((err,user)=>{
                if(err){
                    res.json(err);
                }
                else{
                    res.json(user);
                }
            })
        })
    },
    loginUser:(req,res) =>{
        U.findOne({email:req.body.email}, (err,user) =>{
            if(err){
                res.json(err);
            }
            else{
                bcrypt.compare(req.body.password, user.password,(err,result)=>{
                    req.session.id= user._id;
                    req.session.email = user.email;
                    if(err){
                        console.log("INVALID!!")
                        res.json(err)
                    }
                    else if(result == false){
                        console.log("FAILED!!")
                        res.json("FAIL")
                    }
                    else if(result == true){
                        console.log("logged in")
                        res.json(req.session.email);
                    }
                })
            }
        })
    },
    UserWorkout:(req,res)=>{
        console.log(req.body,"req.body")
        U.findOne({email:req.params.email},(err,result)=>{
            if(err){
                res.json(err)
            }
            else{
                res.json(result)
            }
        })
    }
}