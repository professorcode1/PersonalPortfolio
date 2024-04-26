import * as React from "react";
import { Navbar } from "../components/Navbar";

const RoomScreen: React.FC<{}> = () => {
    return (
        <>
            <Navbar />
            <div>
                Hello world I am room page
            </div>
        </>
    )
}

export {RoomScreen};