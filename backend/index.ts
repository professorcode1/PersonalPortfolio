import express from "express";
import path from "path";
const app = express()

app.use('/static', express.static(__dirname + '/build/static'));

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname,'build', 'index.html'))
})

app.listen(3000, ()=>{
    console.log("server is listening ")
})