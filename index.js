const express= require("express")
const cors= require("cors")
const app= express()
require("dotenv/config")

const pingRoute= require("./routes/Ping")
const authRoute= require("./routes/Auth")
const sheetRoute= require("./routes/Sheet")
const applicationRoute= require("./routes/Application")
const db = require("./db/DB")


app.use(express.json())
app.use(cors())

db()

app.use("/api/ping", pingRoute)
app.use("/api/auth", authRoute)
app.use("/api/sheet", sheetRoute)
app.use("/api/application", applicationRoute)

app.listen(process.env.PORT || 5000, ()=> {
    console.log("Listening on port: 5000")
})