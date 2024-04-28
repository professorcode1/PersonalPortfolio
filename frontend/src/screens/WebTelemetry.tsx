import axios from "axios";
import * as React from "react";
import { URLBASE } from "../utils/URLBase";
import { WebTelemetryEvent } from "../utils/WebTelemetryTypes";

const PasswordInputer:React.FC<{
    setData:(a:any)=>void
}> = ({setData}) => {
    const [form, setForm] = React.useState({
        password:"",
        year:(new Date()).getFullYear(),
        month:(new Date()).getMonth()+1
    });
    const [wait,setWait] = React.useState(false);
    const OnSubmit = async ()=>{
        try {
            setWait(true);
            const {data} = await axios.post(URLBASE + "/viewWebTelemetry",form);
            setData(data);
        } catch (error) {
            alert("errored")
        }finally{
            setWait(false);
        }
    }
    const FormChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [event.target.name]:event.target.value})
    }
    return (
        <div className="flex flex-col border border-black rounded-lg m-2 p-2">
            <p>Password</p>
            <input 
                className="border border-black" 
                type="text"
                name="password"
                value={form.password}
                onChange={FormChange}
            ></input>
            <p>Year</p>
            <input 
                className="border border-black" 
                type="number"
                name="year"
                onChange={FormChange}
                value={form.year}
            ></input>
            <p>Month</p>
            <input 
                className="border border-black" 
                type="number"
                name="month"
                onChange={FormChange}
                value={form.month}
            ></input>
            <button 
                className="border bg-green-500 text-white w-16 m-4"
                onClick={OnSubmit}
            >Submit</button>
            {wait && <p className="text-4xl">Please wait</p>}
        </div>
    );
}
type TSession = {
    sessionId:string,
    time:string
}
type TPageview = WebTelemetryEvent
type TTelemetryData = {
    sessions:TSession[]
    pageview:TPageview[]
}
const PageViewBox:React.FC<{view:TPageview}> = ({view})=>{
    if(view.type === "Pageview"){
        return (
            <div className="border border-black m-2 p-2">
                Pageview
                <p>{view.time}</p>
            </div>
        )
    }
    if(view.type === "Component Mounted" || view.type === "Component Unmounted"){
        return (
            <div className="border border-black m-2 p-2">
                <p>{view.type.split(' ')[1] + " " + view.component_name}</p>
                <p>{view.time}</p>
            </div>
        )
    }
    if(view.type === "Link Clicked"){
        return (
            <div className="border border-black m-2 p-2">
                <p>Clicked link</p>
                <p>{view.href}</p>
                <p>{view.time}</p>
            </div>
        )
    }
    else{
        return (
            <div>
                <p>Pageview is {view.type} which is invalid</p>
            </div>
        )
    }
}
const TelemetryViewer:React.FC<{data:TTelemetryData}> = ({data}) => {
    const [sessionId, setSessionid] = React.useState(data.sessions[0].sessionId);
    return (
        <div className="h-screen w-screen">
            <div className="w-full h-1/2 overflow-scroll">
                <table className="border table border-black">
                    <tr>
                        <td className="border-r border-slate-500 p-2 ">Session</td>
                        <td className="p-2 ">Time</td>
                    </tr>
                    {data.sessions.map(session => <tr className="border border-slate-500">
                        <td 
                            className="border-r border-slate-500 p-2"
                            onClick={()=>setSessionid(session.sessionId)}
                        >{session.sessionId}</td>
                        <td className="p-2"> {session.time}</td>
                    </tr>)}
                </table>

            </div>
            <div className="w-full h-1/2 overflow-y-scroll">
            {data.pageview.filter(
                p => p.sessionId === sessionId
            ).map(p => <PageViewBox view={p} />)}
            </div>
        </div>
    )
}
const WebTelemetryView:React.FC<{}> = () => {
    const [data,setData] = React.useState<TTelemetryData|null>(null);
    return (
        <>
            {data === null && <PasswordInputer setData={setData} />}
            {data === null || <TelemetryViewer data={data} />}
        </>
    )
}

export {WebTelemetryView}