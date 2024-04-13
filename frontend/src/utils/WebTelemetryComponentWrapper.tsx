import React, {useEffect} from "react";
import { ReportWebTelemetryEvent, getCurrentTimeFromInterntionalServer } from "./reportWebTelemetry";
import { GetSessionToken } from "./Cookie";
function WebTelemetryMountingEventHOC(
    Component:React.FC<{}>,
    name:string
):React.FC<{}>{
    const WrapperFunction = () => {
        useEffect(()=>{
            (async ()=>{
                const sessionId = GetSessionToken();
                if(!sessionId)return ;
                await ReportWebTelemetryEvent({
                    type:"Component Mounted",
                    sessionId:sessionId,
                    time:await getCurrentTimeFromInterntionalServer(),
                    component_name:name
                });
                console.log("moutning from wrapper")
            })();

            return () => {
                (async ()=>{
                    const sessionId = GetSessionToken();
                    if(!sessionId)return ;
                    await ReportWebTelemetryEvent({
                        type:"Component Unmounted",
                        sessionId:sessionId,
                        time:await getCurrentTimeFromInterntionalServer(),
                        component_name:name
                    }); 
                    console.log("unmoutning from wrapper")

                })()
            }
        },[]);
        return <Component />;
    };
    return WrapperFunction;
}

export {WebTelemetryMountingEventHOC}