import React from 'react';
import { EventAnalysis } from '../components/EventAnalysis';
import { FlightSimulator } from '../components/Flight Simulator';
import { CollegeScheduler } from '../components/College Scheduler';
import { MLSCHuntPortal } from '../components/MLSC Cryptic Hunt Portal';
import { IntelHackathon } from '../components/Intel Hackathon';
import { BlueYonderHackathon } from '../components/Blue Yonder Hackathon';
import { PowerBot } from '../components/PowerBot';

const rand = (min:number, max:number) => Math.floor(Math.random() * (max - min + 1) + min);

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
    ["Event Analysis", EventAnalysis],
    ["Flight Simulator", FlightSimulator],
    ["College Scheduler", CollegeScheduler],
    ["MLSC Cryptic Hunt Portal", MLSCHuntPortal],
    ["Intel OneAPI Code Maven Hackathon", IntelHackathon],
    ["Blue Yonder Demand and Supply Hackathon", BlueYonderHackathon],
    ["PowerBot: MAQ", PowerBot]
])
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
const uniqueRand = (min:number, max:number, prev:number) => {
    let next = prev;
    
    while(prev === next) next = rand(min, max);
    
    return next;
}
const combinations = [
    { configuration: 1, roundness: 1 },
    { configuration: 1, roundness: 2 },
    { configuration: 1, roundness: 4 },
    { configuration: 2, roundness: 2 },
    { configuration: 2, roundness: 3 },
    { configuration: 3, roundness: 3 }
];
const Projects:React.FC<{
    setSelectedProject:(arg:TProject|null)=>void
    selectedProject:TProject|null
}> = ({
    setSelectedProject,
    selectedProject
}) =>{
    const [configurationIndex, setConfigurationIndex] = React.useState(0)
    const [pauseEffect, setPauseEffect] = React.useState(false);
    const HandleEscPress = (event:KeyboardEvent) => {
        if (event.key === "Escape") {
            setSelectedProject(null);    
            setTimeout(()=>{
                const element = document.getElementById("ProjectsScreen");
                element?.scrollIntoView();
            }, 10)
        }
      
    }
    React.useEffect(()=>{
        const configChangeTimeout = setInterval(()=>{
            if(pauseEffect) return ;
            setConfigurationIndex(uniqueRand(0, combinations.length-1, configurationIndex));
        }, 3000)
        document.addEventListener("keydown", HandleEscPress, false);
        return () => {
            clearTimeout(configChangeTimeout);
            document.removeEventListener("keydown", HandleEscPress,false);
        }

    }, [])
    const PauseEffectEvent = () => setPauseEffect(true);
    const ResumeEffectEvent = () => {
        if(selectedProject) return ;
        setPauseEffect(false);
    };
    const ProjectContent =  ProjectComponent.get(selectedProject!) ?? null
    return (
        <div id="ProjectsScreen" className='h-screen flex flex-col  justify-evenly items-center '>
            <div className='w-3/5 flex pt-8 pb-8'>
                <h1 className='text-5xl MarartSansBoldFont'>
                    Projects
                </h1>
            </div>
            <div 
                className='h-4/5 w-3/5 relative overflow-hidden text-black text-2xl ' 
                data-configuration={(pauseEffect ? 0 : 1) * combinations[configurationIndex].configuration} 
                data-roundness={(pauseEffect ? 0 : 1) * combinations[configurationIndex].roundness}
                data-project-selected={Boolean(selectedProject)}
                id="living-shapes-wrapper"
                onMouseEnter={PauseEffectEvent} 
                onMouseLeave={ResumeEffectEvent} 
                onTouchStart={PauseEffectEvent}
            >


                {ProjectNames.map(project_name => 
                    <div 
                        className="shape cursor-pointer" 
                        data-selected={selectedProject === project_name}
                        onClick={()=>{
                            setSelectedProject(project_name);
                        }} 
                    >
                        <p className=''>
                            <p>
                                {project_name}
                            </p>
                            <p className='text-xs font-normal	'>
                                {ProjectDescription.get(project_name)!}
                            </p>
                        </p>
                        {ProjectContent && <ProjectContent />}
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