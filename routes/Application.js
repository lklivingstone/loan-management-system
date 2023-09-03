const Sheet = require("../models/Sheet")
const { verifyToken, verifyTokenAndAuthorization, verifyTokenForAdmin } = require("../jwt/Verification")

const router= require("express").Router()

//APPLICATION RESULT
router.post("/", verifyToken, async (req, res)=> {
    try{
        const { sheet, details } = req.body.data;
        
        let preAssessment = 20;
        let profit = 0;
        let asset = 0;

        // Iterate through the sheet array and sum the values
        sheet.forEach(item => {
            profit += item.profitOrLoss;
            asset += item.assetsValue;
        });

        asset = asset / 12;

        if (profit > 0) {
            preAssessment = 60;
        }
        if (asset > details.loanAmount) {
            preAssessment = 100;
        }
        const approvedAmount = ( preAssessment * details.loanAmount ) / 100;
        
        res.status(200).json({    
            message : "Approaved Load Amount",
            code : 200, 
            data : approvedAmount
        })
    } catch(err) {
        res.status(500).json({
            message : "Error!",
            code : 500, 
            error : err
        })
    }
})

module.exports= router