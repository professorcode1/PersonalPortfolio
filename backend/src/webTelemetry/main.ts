import { Request, Response } from "express";
import { getCurrentTimeFromInterntionalServer } from "../utils/getTimeFromServer";
import { v4 as uuidv4 } from 'uuid';
import { web_telemetry_connection } from "../connections";
import { async_push_query } from "../utils/db";

const GetNewTokenCallback  = async (req:Request, res:Response)=>{
    const sessionId = uuidv4();
    res.send(sessionId);
    try {
        const time = await getCurrentTimeFromInterntionalServer();        
        await async_push_query("INSERT INTO session_id SET ?", {
            time,
            sessionId
        }, web_telemetry_connection);
    } catch (error) {
        console.error(error)
    }
}

const PostWebTelemetryCallback = async (req:Request, res:Response)=>{
    res.send();
    try {
        await async_push_query("INSERT INTO Pageview SET ?", req.body, web_telemetry_connection);
            
    } catch (error) {
        console.error(error);
    }

};

export {
    GetNewTokenCallback,
    PostWebTelemetryCallback
}