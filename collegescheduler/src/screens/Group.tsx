import * as React from "react";
import { Navbar } from "../components/Navbar";
import { ResourceScreen } from "../components/ResourceScreen";

const GroupScreen:React.FC<{}> = () => {
    return <ResourceScreen title_text="Groups" asset_name="groups" />
}

export {GroupScreen}