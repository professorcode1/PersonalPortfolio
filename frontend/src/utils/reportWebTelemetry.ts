
import axios from "axios";
import { WebTelemetryEvent } from "./WebTelemetryTypes";
import { URLBASE } from "./URLBase";

async function ReportWebTelemetryEvent(event:WebTelemetryEvent){
    try {
        return (axios.post(URLBASE + "/webTelemetry",event))
    } catch (error) {
        console.error(error)
        throw error;
    }
}

async function SetItbounceFalse(event:WebTelemetryEvent) {
    try {
        return axios.post(URLBASE + "/webTelemetry/setbouncefalse", event)
    } catch (error) {
        console.error(error);
        return null;
    }
}

async function getCurrentTimeFromInterntionalServer():Promise<string>{
    try {
        return ((await axios.get("https://worldtimeapi.org/api/timezone/Asia/Kolkata")).data.datetime as string).split('.')[0]    } catch (error) {
        console.error(error)
        return ""
    }
}

async function  getIPAddress():Promise<string|null> {
    try {
        const response = await fetch('https://geolocation-db.com/json/');
        const data = await response.json();
        return data.IPv4         
    } catch (error) {
        return null;
    }
}

export {
    getCurrentTimeFromInterntionalServer,
    ReportWebTelemetryEvent,
    getIPAddress,
    SetItbounceFalse
}