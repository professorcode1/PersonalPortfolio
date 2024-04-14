import express from "express";
import path from "path";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from 'uuid';
import mysql from "mysql"
const util = require('util');
import axios from "axios";
require('dotenv').config();


var connection = mysql.createConnection({
    host     : 'localhost',
    port:3306,
    user     : 'root',
    password : process.env.DBPASS,
    database : process.env.DBNAME
  });
connection.connect();
async function getCurrentTimeFromInterntionalServer():Promise<string>{
    try {
        return ((await axios.get("http://worldtimeapi.org/api/timezone/Asia/Kolkata")).data.datetime as string).split('.')[0] 
    } catch (error) {
        console.error(error)
        return ""
    }
}

function async_get_query(sql_query:string) {
    return util.promisify(connection.query).call(connection, sql_query);
}
function async_push_query(sql_query:string, info:Object) {
    return util.promisify(connection.query).call(connection, sql_query, info);
}
const app = express()
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/static', express.static(__dirname + '/build/static'));
// var cors = require('cors');
// app.use(cors());




app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname,'build', 'index.html'))
});

app.get("/webTelemetry/getNewToken", async (req, res)=>{
    const sessionId = uuidv4();
    res.send(sessionId);
    try {
        const time = await getCurrentTimeFromInterntionalServer();        
        await async_push_query("INSERT INTO session_id SET ?", {
            time,
            sessionId
        });
    } catch (error) {
        console.error(error)
    }
})
 
app.post("/webTelemetry", async (req, res)=>{
    res.send();
    try {
        await async_push_query("INSERT INTO Pageview SET ?", req.body);
            
    } catch (error) {
        console.error(error);
    }

})
app.listen(process.env.PORT, ()=>{
    console.log("server is listening ")
})