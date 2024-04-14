
import axios from "axios";
import { WebTelemetryEvent } from "./WebTelemetryTypes";

async function ReportWebTelemetryEvent(event:WebTelemetryEvent){
    try {
        axios.post("webTelemetry",event)
    } catch (error) {
        console.error(error)
    }
}

async function getCurrentTimeFromInterntionalServer():Promise<string>{
    try {
        return (await axios.get("http://worldtimeapi.org/api/timezone/Asia/Kolkata")).data.datetime 
    } catch (error) {
        console.error(error)
        return ""
    }
}

export {
    getCurrentTimeFromInterntionalServer,
    ReportWebTelemetryEvent
}