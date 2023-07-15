require("dotenv").config()
const express = require("express")
const dbConnect=require("./config/mongo")
const cors= require("cors")
const app=express()
app.use(cors())
app.use(express.json())
const port= process.env.PORT || 3000



/*
aca invocamos a las rutas!*/
app.use("/api",require("./routes"))
app.listen(port,() =>{
    console.log('tu app esta lista por http://localhost:'+port)
})

dbConnect()