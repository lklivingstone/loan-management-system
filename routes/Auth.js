const router= require("express").Router()
const User = require("../models/User")
const CryptoJS= require("crypto-js")
require("dotenv/config")
const jwt= require("jsonwebtoken")

router.post("/register", async (req, res) => {
    const newUser= new User({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        username : req.body.username,
        email : req.body.email,
        password : CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTO_KEY).toString(),
        isAdmin : req.body.isAdmin || false
    })

    try{
        const savedUser= await newUser.save()
        res.status(200).json({
            message : "Account Created!",
            code : 200, 
            data : savedUser
        })
    }catch(err) {
        res.status(500).json(
            {
                message: "Error Registering!",
                code: 500, 
                error : err
            })
    }
})

router.post("/login", async (req, res) => {
    try{
        const user= await User.findOne({username: req.body.username})
        if (!user) {
            res.status(401).json(
                {
                    message: "wrong credentials!",
                    code: 401
                })
        }
        else {
            const OriginalPassword= CryptoJS.AES.decrypt(user.password, process.env.CRYPTO_KEY).toString(CryptoJS.enc.Utf8)

            if (OriginalPassword!==req.body.password) {
                res.status(401).json({
                    message: "wrong credentials!",
                    code: 401
                })
            }
            else {

                const accessToken= jwt.sign({
                    id : user._id,
                    isAdmin : user.isAdmin
                }, process.env.JWT_KEY, 
                { 
                    expiresIn: "5h"
                })
                const { password, ...other }= user._doc
                res.status(200).json({    
                    message : "Logged In!",
                    code : 200, 
                    data : {
                        ...other, accessToken
                    }
                })
            }
        }
    }catch(err) {
        res.status(500).json({
            message : "Error Loggin In!",
            code : 500, 
            error : err
        })
    }
})

module.exports= router