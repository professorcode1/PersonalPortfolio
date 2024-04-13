import express from "express";
import path from "path";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from 'uuid';

const app = express()
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/static', express.static(__dirname + '/build/static'));
var cors = require('cors');
app.use(cors());




app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname,'build', 'index.html'))
});

app.get("/webTelemetry/getNewToken", (req, res)=>{
    return res.send(uuidv4());
})

app.post("/webTelemetry", (req, res)=>{
    console.log(req.body)
    return res.send();
})
app.listen(8000, ()=>{
    console.log("server is listening ")
})