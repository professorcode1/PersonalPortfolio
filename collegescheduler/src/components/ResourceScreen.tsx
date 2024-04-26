import * as React from "react";
import { useAppSelector } from "../redux/main";
import { Navbar } from "./Navbar";
import { IUser } from "../utils/UserType";
import { CreateProfessor, SingleProfessor } from "./Professor";
import { CreateGroup, SingleGroup } from "./Groups";


const ResourceScreen:React.FC<{
    title_text:string,
    asset_name:"rooms"|"professors"|"groups"
}> = (
    {
        title_text,
        asset_name
    }
) => {
    const [showCreateProfessor, setShowCreateProfessor] = React.useState(false);
    const {numberOfDays :days_per_week, periodsPerDay :periods_per_day, professors ,groups} = useAppSelector(s => s.user!);
    const assert = useAppSelector(s=>s.user!)[asset_name];
    const CreateComponenet = (()=>{
        if(asset_name === "professors"){
            return CreateProfessor
        }else{
            return CreateGroup
        }
    })();
    const SingleViewList = (()=>{
        if(asset_name === "professors"){
            return professors.map(prof => <SingleProfessor professor={prof} key={"prof" + prof._id} />);
        }else if(asset_name === "groups"){
            return groups.map(group => <SingleGroup group={group} key={"group" + group._id} />)
        }else{
            return professors.map(prof => <SingleProfessor professor={prof} key={prof._id} />);
        }
    })()
    return (
        <div className="overflow-x-clip">
            <Navbar />
            <div className="h-screen w-screen pt-10 flex items-center flex-col ">
                <p className="text-4xl">
                    {title_text}
                </p>
                {showCreateProfessor && <CreateComponenet dismount_me={() => setShowCreateProfessor(false)} days_per_week={days_per_week} periods_per_day={periods_per_day} />}
                <button 
                    className={"text-sm p-2 border  text-white rounded-lg m-1 " + (showCreateProfessor ? " bg-red-400 " : " bg-green-400 ")}
                    onClick={()=>setShowCreateProfessor(!showCreateProfessor)}
                >{showCreateProfessor ? "Never mind":("Create new "+title_text)}</button>
                <div className="w-full flex flex-wrap justify-center ">
                    {SingleViewList}
                </div>
            </div>
        </div>
    )
}

export {ResourceScreen}