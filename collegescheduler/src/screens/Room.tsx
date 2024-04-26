import * as React from "react";
import { Navbar } from "../components/Navbar";
import { ResourceScreen } from "../components/ResourceScreen";

const RoomScreen: React.FC<{}> = () => {
    return <ResourceScreen title_text="Rooms" asset_name="rooms" />
}

export {RoomScreen};