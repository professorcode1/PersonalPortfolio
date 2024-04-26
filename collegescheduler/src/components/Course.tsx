import { ICourse } from "../utils/UserType";
import { setWaiting } from "../redux/waiting";
import { setUser } from "../redux/User";
import { IUnavailability, Unavailability, getUnavailabilityKey } from "../components/Unavailability";
import { GetHelper, PostHelper } from "../utils/PostHelpter";
import { useAppDispatch, useAppSelector } from "../redux/main";
import * as React from "react";
import axios from "axios";
import { URLBase } from "../utils/URLBase";
import { setCourse } from "../redux/SelectedCourse";
import { setScreen } from "../redux/screen";
const SingleCourse:React.FC<{
    course:ICourse, 
}> = (props) => {
    const dispatcher = useAppDispatch();
    const OnDelete = async () => {
        await GetHelper(
            x => dispatcher(setWaiting(x)),
            x => dispatcher(setUser(x)),
            "/deleteCourse/" + props.course._id
        );
    }
    const [taughtTo, setTaughtTo] = React.useState("");
    const [taugthBy, setTaughtBy] = React.useState("");
    React.useEffect(()=>{
        (async()=>{
            try {
                const {prof_namse,group_names} = (await axios.get(
                    `${URLBase}/CourseAssets/${props.course._id}`, {
                    withCredentials:true
                })).data;
                setTaughtTo((group_names.map((x:any) => x.name) as string[]).join(", "));
                setTaughtBy((prof_namse.map((x:any) => x.name) as string[]).join(", "));
            } catch (error) {
                setTaughtTo("(Some error occured)")
                setTaughtBy("(Some error occured)")
            }

        })()
    }, []);

    return (
        <div className="w-64 h-64 border border-black m-2 p-2 relative">
            <p className="pl-1 pt-0">
                {props.course.courseName}
            </p>
            <p className="text-sm p-1 h-32 overflow-hidden text-ellipsis">Taught by:{taugthBy}</p>
            <p className="text-sm p-1 h-16 overflow-hidden text-ellipsis">Taught to:{taughtTo}</p>
            <a 
                className="absolute bottom-0 text-sm p-2 pl-1 text-blue-500 cursor-pointer"
                onClick={OnDelete}
            >Delete</a>
            <button 
                className="absolute bottom-0 right-0 pr-2 text-sm p-2 pl-1 text-blue-500 cursor-pointer"
                onClick={()=>{
                    dispatcher(setCourse(props.course._id));
                    dispatcher(setScreen("Period"))
                }}
            >
                CRUD Periods
            </button>
        </div>
    );
}

const CouseAssetPicker:React.FC<{
    asset:IUnavailability,
    asset_id_to_name_mapping:{[key:string]:string}
    setAsset:(a:IUnavailability)=>void,
    assetKeyStart:string,
    slice_index?:number
}> = ({
    asset,
    asset_id_to_name_mapping,
    setAsset,
    assetKeyStart,
    slice_index
}) => {
    if(slice_index === undefined) slice_index = 1;
    return (
        <div className="flex overflow-scroll h-16 overflow-y-clip flex-none">
            {Object.entries(asset).map(([id, status])=>[id.slice(slice_index),status]).map(([id,status])=>[asset_id_to_name_mapping[id] as string, id,status]).map(([name,id, status])=>{
                return (
                    <p 
                        className={" w-32 mx-2 p-2 w-full whitespace-nowrap border-2 rounded-lg cursor-pointer " + (status === "off" ? " border-red-400" : " border-green-400")} 
                        onClick={()=>{
                            setAsset({...asset, [assetKeyStart + id]: status === "off"?"on":"off"})
                        }}
                    >
                        {name}
                    </p>
                )
            })}
        </div>
    )
}

const CreateCourse:React.FC<{
    days_per_week:number,
    periods_per_day:number,
    dismount_me:()=>void
}> = ({
    days_per_week,
    periods_per_day,
    dismount_me
}) => {
    const [courseName, setcourseName] = React.useState("");
    const {professors, groups:intialGroups} = useAppSelector(s => s.user!)
    const [proffs, setProffs] = React.useState<IUnavailability>(Object.fromEntries(professors.map(prof => [`P${prof._id}`, "off"])));
    const [groups, setGroups] = React.useState<IUnavailability>(Object.fromEntries(intialGroups.map(group => [`G${group._id}`, "off"])));
    const ProfessorIdToNameMapping:{[key:string]:string} = Object.fromEntries(professors.map(prof => [prof._id, prof.professorName]));
    const GroupIdToNameMapping:{[key:string]:string} = Object.fromEntries(intialGroups.map(group => [group._id, group.groupName]))
    const dispatcher = useAppDispatch();
    const Submit= async () => {
        await PostHelper(
            x => dispatcher(setWaiting(x)),
            x => dispatcher(setUser(x)),
            "/course",
            {
                courseName,
                ...proffs,
                ...groups
            }
        );
        dismount_me();
    }
    return (
        <div className="w-1/2 border border-black rounded-lg p-2">
            <div className="flex m-4">
                <p className="mx-2 w-32">Course Name</p>
                <input type="text" className="border border-black rounded-lg" value={courseName} onChange={e => setcourseName(e.target.value)} />
            </div>
            <div className="ml-6">
                <p className="text-xl py-4 pt-1">Professors</p>
                <CouseAssetPicker assetKeyStart="P" asset={proffs} asset_id_to_name_mapping={ProfessorIdToNameMapping} setAsset={setProffs} />
            </div>
            <div className="ml-6">
                <p className="text-xl py-4 pt-1">Groups</p>
                <CouseAssetPicker assetKeyStart="G" asset={groups} asset_id_to_name_mapping={GroupIdToNameMapping} setAsset={setGroups} />
            </div>
            <button onClick={Submit} className="m-2 ml-6 p-2 text-md text-white bg-green-400 rounded-lg w-32">Submit</button>
        </div>
    )
}

export {SingleCourse, CreateCourse, CouseAssetPicker}