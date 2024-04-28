
import axios from "axios";
import { WebTelemetryEvent } from "./WebTelemetryTypes";
import { URLBASE } from "./URLBase";

async function ReportWebTelemetryEvent(event:WebTelemetryEvent){
    try {
        axios.post(URLBASE + "/webTelemetry",event)
    } catch (error) {
        console.error(error)
    }
}

async function getCurrentTimeFromInterntionalServer():Promise<string>{
    try {
        return ((await axios.get("http://worldtimeapi.org/api/timezone/Asia/Kolkata")).data.datetime as string).split('.')[0]    } catch (error) {
        console.error(error)
        return ""
    }
}

export {
    getCurrentTimeFromInterntionalServer,
    ReportWebTelemetryEvent
}