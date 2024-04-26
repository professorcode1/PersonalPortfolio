import * as React from "react";
import { Navbar } from "../components/Navbar";
import { ResourceScreen } from "../components/ResourceScreen";

const CourseScreen:React.FC<{}> = () => {
    return <ResourceScreen title_text="Course" asset_name="courses" />
}

export {CourseScreen}