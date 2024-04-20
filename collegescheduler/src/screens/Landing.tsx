import * as React from "react"
import { URLBase } from "../utils/URLBase"

const Landing:React.FC<{}> = () =>{
    return (
        <div className="w-screen h-screen flex flex-col">
            <div className="flex flex-col items-center justify-center mt-4 border-slate-800 border-b-2 pb-4 mx-2">
                <p className="text-5xl">
                    College Scheduler
                </p>
                <p className="mt-2">
                    A Software Engineering project by <a
                     className="text-blue"
                     href={URLBase}
                     style={{
                        color:"#0000EE"
                     }}
                    >Raghav Kumar</a>
                </p>
            </div>
        </div>
    )
}

export {Landing}