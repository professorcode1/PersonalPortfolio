import axios from "axios";
import * as React from "react";
import { URLBase } from "../utils/URLBase";

const Homescreen:React.FC<{}> = () => {
    const [backendDataAsString, setBackendDataAsString] = React.useState("")
    React.useEffect(()=>{
        (async ()=>{
            try {
                setBackendDataAsString(JSON.stringify((await axios.get(`${URLBase}/userDatabaseObject`, {
                    withCredentials:true
                })).data))
            } catch (error) {
                console.log("womp womp")
            }
        })()
    })
    return (
        <div>
            Hello world I am home screen
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p>
                {backendDataAsString}
            </p>
        </div>
    )
}

export {Homescreen}