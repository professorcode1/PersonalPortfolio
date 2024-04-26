import * as React from "react";
import { Navbar } from "../components/Navbar";

const GroupScreen:React.FC<{}> = () => {
    return (
        <>
            <Navbar />
            <div>
                Hello world I am Group
            </div>
        </>
    )
}

export {GroupScreen}