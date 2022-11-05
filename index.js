const express = require("express")
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 7003

app.get("/",(req,res)=>{
    res.send("welcome")
})

app.listen(PORT,()=>{
    console.log(`${PORT} Port`)
})
