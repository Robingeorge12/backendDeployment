const express = require("express")
const app = express()
const {connection} = require("./db")
require('dotenv').config()
const PORT = process.env.PORT || 7003

app.get("/",(req,res)=>{
    res.send("welcome")
})
app.get("/about" ,(req,res)=>{

    res.send("About page")
})


app.listen(PORT,async ()=>{

    try{
        await connection
        console.log("connected")
    }catch(er){
        console.log("Error")
    }
    console.log(`${PORT} Port`)
})
