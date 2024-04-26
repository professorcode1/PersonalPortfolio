import * as React from "react";
import { Navbar } from "../components/Navbar";
import { useAppDispatch, useAppSelector } from "../redux/main";
import { IProfessor, IUser } from "../utils/UserType";
import { setWaiting } from "../redux/waiting";
import axios from "axios";
import { URLBase } from "../utils/URLBase";
import { setUser } from "../redux/User";
import { IUnavailability, Unavailability, getUnavailabilityKey } from "../components/Unavailability";
import { PostHelper } from "../utils/PostHelpter";

const SingleProfessor:React.FC<{
    professor:IProfessor, 
}> = (props) => {
    const OnDelete = async () => {
        dispatcher(setWaiting(true));
        try {
            await axios.get(URLBase + "/deleteProfessor/" + props.professor._id, {withCredentials:true});
            const new_user:IUser = (await axios.get(URLBase + "/userDatabaseObject", {
                withCredentials:true
            })).data;
            dispatcher(setUser(new_user))
            alert("Done!");
        } catch (error) {
            alert("some error occured")
            dispatcher(setWaiting(false));
        }
        dispatcher(setWaiting(false));

    }
    const dispatcher = useAppDispatch();
    return (
        <div className="w-32 h-32 border border-black m-2 p-2 relative">
            <p className="absolute top-0 p-2 pl-1">
                {props.professor.professorName}
            </p>
            <a 
                className="absolute bottom-0 text-sm p-2 pl-1 text-blue-500 cursor-pointer"
                onClick={OnDelete}
            >Delete</a>
        </div>
    );
}

const CreateProfessor:React.FC<{
    days_per_week:number,
    periods_per_day:number,
    dismount_me:()=>void
}> = ({
    days_per_week,
    periods_per_day,
    dismount_me
}) => {
    const [profName, setprofName] = React.useState("")
    const [unavailability, setUnavailability] = React.useState<IUnavailability>(Object.fromEntries(
        new Array(days_per_week * periods_per_day).fill(null).map((x,i) => [getUnavailabilityKey(i), "off"])
    ));
    const dispatcher = useAppDispatch();
    const Submit= async () => {
        await PostHelper(
            x => dispatcher(setWaiting(x)),
            x => dispatcher(setUser(x)),
            "/professor",
            {
                days_per_week,
                periods_per_day,
                profName,
                ...unavailability,
            }
        );
        dismount_me();
    }
    return (
        <div className="w-1/2 border border-black rounded-lg p-2">
            <div className="flex m-4">
                <p className="mx-2">Professor Name</p>
                <input type="text" className="border border-black rounded-lg" value={profName} onChange={e => setprofName(e.target.value)} />
            </div>
            <div className="ml-6">
                <Unavailability setUnavailability={setUnavailability} unavailability={unavailability} days_per_week={days_per_week} periods_per_day={periods_per_day} />
            </div>
            <button onClick={Submit} className="m-2 ml-6 p-2 text-md text-white bg-green-400 rounded-lg w-32">Submit</button>
        </div>
    )
}

const ProfessorScreen:React.FC<{}> = () => {
    const [showCreateProfessor, setShowCreateProfessor] = React.useState(false);
    const {numberOfDays :days_per_week, periodsPerDay :periods_per_day, professors} = useAppSelector(s => s.user!)
    return (
        <div className="overflow-x-clip">
            <Navbar />
            <div className="h-screen w-screen pt-10 flex items-center flex-col ">
                <p className="text-4xl">
                    Professors
                </p>
                {showCreateProfessor && <CreateProfessor dismount_me={() => setShowCreateProfessor(false)} days_per_week={days_per_week} periods_per_day={periods_per_day} />}
                <button 
                    className={"text-sm p-2 border  text-white rounded-lg m-1 " + (showCreateProfessor ? " bg-red-400 " : " bg-green-400 ")}
                    onClick={()=>setShowCreateProfessor(!showCreateProfessor)}
                >{showCreateProfessor ? "Never mind":"Create new professor"}</button>
                <div className="w-full flex flex-wrap justify-center ">
                    {professors.map(prof => <SingleProfessor professor={prof} key={prof._id} />)}
                </div>
            </div>
        </div>
    )
}

export {ProfessorScreen}