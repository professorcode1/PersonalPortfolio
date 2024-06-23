import { configure_dotnev, get_build_path } from "./src/utils/configDotEnv";
configure_dotnev();
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import {   web_telemetry_connection } from "./src/connections";
import { GetNewTokenCallback, PostWebTelemetryCallback, ViewWebTelemetry } from "./src/webTelemetry/main";


// @ts-ignore
const cookieparse = require("cookie-parser")

web_telemetry_connection.connect();




const app = express()
// var cors = require('cors');
// app.use(cors({
//     credentials: true,
//     origin: "http://localhost:3000",
//     methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
// }));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/static', express.static(path.join(get_build_path(), 'static')));
app.use(cookieparse());


app.get("/", (req, res)=>{
    res.sendFile(path.join(get_build_path(), 'index.html'))
});
app.get("/webTelemetry/getNewToken", GetNewTokenCallback);
app.post("/webTelemetry", PostWebTelemetryCallback);
app.post("/viewWebTelemetry",ViewWebTelemetry )
//


app.listen(process.env.PORT, ()=>{
    console.log(`server for portfolio is listening on ${process.env.PORT}`)
});