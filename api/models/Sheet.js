const mongoose = require("mongoose")

const Sheetschema= new mongoose.Schema(
    {
        userID: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        month: {
            type: Number,
            required: true
        },
        profitOrLoss: {
            type: Number,
            required: true
        },
        assetsValue: {
            type: Number,
            required: true
        }
    }, 
    {
        timestamps: true
    }
)

module.exports= mongoose.model('Sheet', Sheetschema)