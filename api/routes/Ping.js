const router= require("express").Router()
require("dotenv/config")

router.get("/", async (req, res) => {
    res.status(200).json({
        "message" : "App initialized!",
        "code" : 200
    })
})

module.exports= router