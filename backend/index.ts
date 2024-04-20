require('dotenv').config();
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import { web_telemetry_connection } from "./src/connections";
import { GetNewTokenCallback, PostWebTelemetryCallback } from "./src/webTelemetry/main";
const cookieparse = require("cookie-parser")


web_telemetry_connection.connect();



const app = express()
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/static', express.static(__dirname + '/build/static'));
app.use(cookieparse());
// var cors = require('cors');
// app.use(cors());




app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname,'build', 'index.html'))
});

app.get("/webTelemetry/getNewToken", GetNewTokenCallback);

app.post("/webTelemetry", PostWebTelemetryCallback);

app.listen(process.env.PORT, ()=>{
    console.log("server is listening ")
});