import * as React from "react";
import { Navbar } from "../components/Navbar";
import { useAppDispatch, useAppSelector } from "../redux/main";
import { ResourceScreen } from "../components/ResourceScreen";




const ProfessorScreen:React.FC<{}> = () => {
    return <ResourceScreen title_text="Professors" asset_name="professors" />
}

export {ProfessorScreen}