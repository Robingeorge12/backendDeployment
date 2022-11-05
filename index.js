const express = require("express")
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 7003

app.get("/",(req,res)=>{
    res.send("welcome")
})
app.get("/about" ,(req,res)=>{

    res.send("About page")
})


app.listen(PORT,()=>{
    console.log(`${PORT} Port`)
})
