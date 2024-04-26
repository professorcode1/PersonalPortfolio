require('dotenv').config();
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import {  college_scheduler_connection, web_telemetry_connection } from "./src/connections";
import { GetNewTokenCallback, PostWebTelemetryCallback } from "./src/webTelemetry/main";
import { Authenticate, LoginRoute, RegisterRoute } from "./src/college scheduler/auth";
import { extend_id_to_24_char, groupBy } from "./src/college scheduler/utils";
import { async_get_query } from "./src/utils/db";
import { SetParameter } from "./src/college scheduler/parameter";
import { CreateProfessor, DeleteProfessor } from "./src/college scheduler/professor";
import { CreateGroup, DeletGroup } from "./src/college scheduler/group";
// @ts-ignore
const cookieparse = require("cookie-parser")


web_telemetry_connection.connect();



const app = express()
var cors = require('cors');
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000",
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
}));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/static', express.static(__dirname + '/build/static'));
app.use(cookieparse());



app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname,'build', 'index.html'))
});
app.get("/webTelemetry/getNewToken", GetNewTokenCallback);
app.post("/webTelemetry", PostWebTelemetryCallback);

//
app.post("/collegeSchduler/login", LoginRoute);
app.post("/collegeSchduler/register", RegisterRoute);
app.get("/collegeSchduler/AmIAuthenticated", Authenticate, (req, res) => {
    return res.status(200).send();
});
app.post("/collegeSchduler/parameter", Authenticate, SetParameter);

app.post("/collegeSchduler/professor", Authenticate, CreateProfessor);
app.get("/collegeSchduler/deleteProfessor/:professorId", Authenticate, DeleteProfessor);

app.get("/collegeSchduler/deleteGroup/:groupId", Authenticate, DeletGroup);
app.post("/collegeSchduler/group", Authenticate, CreateGroup);

app.get("/collegeSchduler/userDatabaseObject", Authenticate, async (req,res) => {
    const [[user_Object],
        rooms_data, room_ban_times,
        groups_data, group_ban_times,
        professors_data, professor_ban_times, 
        courses_data, 
        period_data, period_group, period_ban_times] = await async_get_query(
            `CALL entire_university_information(${((req as any).user).university_id})`, 
        college_scheduler_connection);

    const room_ban_times_grouped = groupBy(room_ban_times, x => x.room_id);
    const group_ban_times_grouped = groupBy(group_ban_times, x => x.group_id);
    const professor_ban_times_grouped = groupBy(professor_ban_times, x => x.professor_id);
    const period_group_grouped = groupBy(period_group, x => x.period_id);
    const period_ban_times_grouped = groupBy(period_ban_times, x => x.period_id);
    // console.log(room_ban_times_grouped ,group_ban_times_grouped ,professor_ban_times_grouped ,period_group_grouped ,period_ban_times_grouped);
    const room_map = new Map();
    const professor_map = new Map();
    const group_map = new Map();
    for(let room of rooms_data){
        room_map.set(room._id, room); 
        if(room_ban_times_grouped.has(room._id)){
            room.unAvialability = room_ban_times_grouped.get(room._id).map((x:any) => x.ban_time);
        }else{
            room.unAvialability = [];
        }
        room.periodsUsedIn = [];
    }

    for(let group of groups_data){
        group_map.set(group._id, group); 
        if(group_ban_times_grouped.has(group._id)){
            group.unAvialability = group_ban_times_grouped.get(group._id).map((x:any) => x.ban_time);
        }else{
            group.unAvialability = [];
        }
        group.periodsAttended = [];
    }

    for(let professor of professors_data){
        professor_map.set(professor._id, professor); 
        if(professor_ban_times_grouped.has(professor._id)){
            professor.unAvialability = professor_ban_times_grouped.get(professor._id).map((x:any) => x.ban_time);
        }else{
            professor.unAvialability = [];
        }
        professor.periodsTaken = [];
    }
    for(let period of period_data){
        period.groupsAttending = period_group_grouped.get(period._id).map((x:any) => x.group_id);
        if(period_ban_times_grouped.has(period._id))
            period.periodAntiTime = period_ban_times_grouped.get(period._id).map((x:any) => x.ban_time);
        else
            period.periodAntiTime = [];
        period._id = extend_id_to_24_char(period._id);
        room_map.get(period.roomUsed).periodsUsedIn.push(period._id);
        professor_map.get(period.profTaking).periodsTaken.push(period._id);
        for(let group_id of period.groupsAttending)
            group_map.get(group_id).periodsAttended.push(period._id);
    }
    user_Object.rooms = rooms_data;
    user_Object.professors = professors_data;
    user_Object.groups = groups_data;
    user_Object.courses = courses_data;
    user_Object.periods = period_data;
    res.send(user_Object);
});

app.listen(process.env.PORT, ()=>{
    console.log("server is listening ")
});