const Sheet = require("../models/Sheet")
const { verifyToken, verifyTokenAndAuthorization, verifyTokenForAdmin } = require("../jwt/Verification")

const router= require("express").Router()

//POST SHEET
router.post("/", verifyToken, async (req, res)=> {
    const reqBody = req.body;
    const sheet= new Sheet({
        userID : req.user.id,
        year: reqBody.year,
        month: reqBody.month,
        profitOrLoss: reqBody.profitOrLoss,
        assetsValue: reqBody.assetsValue
    })

    try{
        const newSheet = await sheet.save()
        res.status(200).json({    
            message : "Sheet Created!",
            code : 200, 
            data : newSheet
        })
    } catch(err) {
        res.status(500).json({
            message : "Error Loggin In!",
            code : 500, 
            error : err
        })
    }
})

//GET BALANCE SHEET
router.get("/balancesheet", verifyToken, async (req, res) => {
    try{
        const sheets = await Sheet.find({userID : req.user.id})
        .sort({ createdAt: -1 })
        .limit(12)    
        
    
        res.status(200).json({
            message: "Balance Sheet",
            code: 200,
            data: sheets
        })
    } 
    catch(err) {
        res.status(500).json(err)
    }
})


module.exports= router