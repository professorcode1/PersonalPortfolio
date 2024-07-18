import React, { MouseEvent, MouseEventHandler } from "react"
import { GetSessionToken } from "../utils/Cookie"
import { ReportWebTelemetryEvent, getCurrentTimeFromInterntionalServer } from "../utils/reportWebTelemetry"

const WebTelemetryAnchor:React.FC<{
    children:React.ReactNode
    href:string
    className?:string
}> = (
    {
        children,
        href,
        className
    }
) => {

    const OnLinkClick:MouseEventHandler<HTMLAnchorElement> = (event:MouseEvent) => {
        event.preventDefault()
        const potentialToken = GetSessionToken();
        if(potentialToken){
            (async ()=>{
                await ReportWebTelemetryEvent({
                    type:"Link Clicked",
                    time: await getCurrentTimeFromInterntionalServer(),
                    href,
                    sessionId:potentialToken,
                    ipaddr:null
                });
            })()
        }
        try {
            window!.open(href, '_blank')!.focus();
        } catch (error) {
            console.error(error)
            alert("sorry, something has gone wrong!")
        }

    }
    return <a onClick={OnLinkClick} className={className + " cursor-pointer "} > {children}</a>
}

export {WebTelemetryAnchor}