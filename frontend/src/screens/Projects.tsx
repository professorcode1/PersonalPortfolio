import React from 'react';
import { EventAnalysis } from '../components/EventAnalysis';
import { FlightSimulator } from '../components/Flight Simulator';
import { CollegeScheduler } from '../components/College Scheduler';
import { MLSCHuntPortal } from '../components/MLSC Cryptic Hunt Portal';
import { IntelHackathon } from '../components/Intel Hackathon';
import { BlueYonderHackathon } from '../components/Blue Yonder Hackathon';
import { PowerBot } from '../components/PowerBot';
import { WebTelemetryMountingEventHOC } from '../utils/WebTelemetryComponentWrapper';


const ProjectNames = [
    "PowerBot: MAQ",
    "Event Analysis",
    "Flight Simulator",
    "College Scheduler",
    "MLSC Cryptic Hunt Portal",
    "Intel OneAPI Code Maven Hackathon",
    "Blue Yonder Demand and Supply Hackathon",
] as const 

type TProject = typeof ProjectNames[number]

const ProjectComponent:Map<TProject, React.FC> = new Map([
    [
        "Event Analysis", 
        WebTelemetryMountingEventHOC(EventAnalysis, "Event Analysis")],
    [
        "Flight Simulator", 
        WebTelemetryMountingEventHOC(FlightSimulator, "Flight Simulator")],
    [
        "College Scheduler", 
        WebTelemetryMountingEventHOC(CollegeScheduler, "College Scheduler")],
    [
        "MLSC Cryptic Hunt Portal", 
        WebTelemetryMountingEventHOC(MLSCHuntPortal, "MLSC Cryptic Hunt Portal")],
    [
        "Intel OneAPI Code Maven Hackathon", 
        WebTelemetryMountingEventHOC(IntelHackathon, "Intel OneAPI Code Maven Hackathon")],
    [
        "Blue Yonder Demand and Supply Hackathon", 
        WebTelemetryMountingEventHOC(BlueYonderHackathon, "Blue Yonder Demand and Supply Hackathon")],
    [
        "PowerBot: MAQ", 
        WebTelemetryMountingEventHOC(PowerBot, "PowerBot: MAQ")]]
)
const ProjectDescription:Map<TProject, string> = new Map([
    [
        "PowerBot: MAQ", 
        "My experience as a Data Engineer/Software Engineer at MAQ Software."
    ],[
        "Event Analysis", 
        "A CUDA accelerated scientific computation library used for detecting extreme weather events."
    ],[
        "Flight Simulator", 
        "An OpenGL based flight simulator in C++ with no external dependencies."
    ],[
        "College Scheduler", 
        "My Software Engineering course project that allows for creating a college schedule given the requirements."
    ],[
        "MLSC Cryptic Hunt Portal", 
        "An portal created and used for an online cryptic hunt."
    ],[
        "Intel OneAPI Code Maven Hackathon", 
        "An Intel OneAPI solution to predict stocks."
    ],[
        "Blue Yonder Demand and Supply Hackathon", 
        "A Monte Carlo Tree Search implementation to optimise the logistics problem of optimal trucking."
    ]
])

const LIVE_PROJECTS:readonly TProject[] = ["College Scheduler", "Flight Simulator"] as const;

const Projects:React.FC<{
    setSelectedProject:(arg:TProject|null)=>void
    selectedProject:TProject|null
}> = ({
    setSelectedProject,
    selectedProject
}) =>{
    const HandleEscPress = (event:KeyboardEvent) => {
        if (event.key === "Escape") {
            setSelectedProject(null);    
        }
      
    }
    React.useEffect(()=>{
        document.addEventListener("keydown", HandleEscPress, false);

    }, [])
    const ProjectContent =  ProjectComponent.get(selectedProject!) ?? null
    return (
        <div id="ProjectsScreen" className='h-screen flex flex-col  justify-evenly items-center '>
            <div className='w-full lg:w-4/5 flex justify-center lg:justify-start pt-8 pb-8 '>
                <h1 className='text-5xl MarartSansBoldFont'>
                    Projects
                </h1>
            </div>
            <div 
                className='h-4/5 w-full  lg:w-4/5 relative overflow-hidden text-black text-2xl grow grid grid-rows-1 md:grid-rows-2   gap-8 overflow-x-auto px-8 lg:px-0 pb-16 items-center grid-flow-col-dense' 
                data-project-selected={Boolean(selectedProject)}
                id="living-shapes-wrapper"
            >


                {ProjectNames.map(project_name =>   
                    <div 
                        className="shape cursor-pointer relative"  
                        data-selected={selectedProject === project_name}
                        onClick={()=>{
                            setSelectedProject(project_name);
                        }} 
                        key={project_name}
                    >
                        <p className='ml-1'>
                            <p className='text-xl pb-1'>
                                {project_name}
                            </p>
                            <p className='text-xs font-normal	'>
                                {ProjectDescription.get(project_name)!}
                            </p>
                        </p>
                        {LIVE_PROJECTS.includes(project_name)  && 
                            <p className='absolute bottom-2 left-2 text-green-600 font-semibold text-xl live-status'>Live</p>
                        } 
                        {selectedProject === project_name && ProjectContent && <ProjectContent key={project_name} />}
                        

                    </div>
                    )}
            <button 
                    className="close-project text-base bg-white p-2 rounded-lg w-16" 
                    onClick={()=>{
                        setSelectedProject(null)
                    }}
                >
                    Esc
            </button>

            </div>
        </div>
    )
}

export {Projects}

export type {TProject}