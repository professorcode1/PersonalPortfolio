import * as React from "react";
import { Navbar } from "../components/Navbar";

const CourseScreen:React.FC<{}> = () => {
    return (
        <>
        <Navbar />
        <div>
            Hello world I am Course
        </div>
        </>
    )
}

export {CourseScreen}