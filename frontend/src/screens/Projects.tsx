import React from 'react';
import { EventAnalysis } from '../components/EventAnalysis';
import { FlightSimulator } from '../components/Flight Simulator';
import { CollegeScheduler } from '../components/College Scheduler';
import { MLSCHuntPortal } from '../components/MLSC Cryptic Hunt Portal';
import { IntelHackathon } from '../components/Intel Hackathon';
import { BlueYonderHackathon } from '../components/Blue Yonder Hackathon';
import { PowerBot } from '../components/PowerBot';
import { WebTelemetryMountingEventHOC } from '../utils/WebTelemetryComponentWrapper';
import ApacheSparkLogo from "../assets/spark logo.png"
import MySqlLogo from "../assets/mysql.svg"
import PythonLogo from "../assets/python logo.jpg"
import SelemiumLogo from "../assets/Selenium_Logo.jpg"
import CppLogo from "../assets/c++.svg"
import ExpressLogo from "../assets/expressjs.svg"
import OneApiLogo from "../assets/logo-oneapi-rwd.jpg"
import MongoDbLogo from "../assets/mongodb logo.png"
import NodeLogo from "../assets/nodejs.svg"
import CudaLogo from "../assets/Nvidia_CUDA_Logo.jpg"
import OpenGLLogo from "../assets/opengl icon.jpg"
import ReactLogo from "../assets/react.svg"
const TechnologiesUsedName = [
    "Apache Spark Logo",
    "MySql Logo",
    "Python Logo",
    "Selenium Logo",
    "C++ Logo",
    "Express Logo",
    "OneAPI Logo",
    "MongoDB Logo",
    "Node Logo",
    "Cuda Logo",
    "OpenGL Logo",
    "React Logo"
] as const;
type ETechnologyUsed = typeof TechnologiesUsedName[number];
const TechnologyUsedAssets:Map<ETechnologyUsed, React.ReactNode> = new Map([
    ["Apache Spark Logo" ,<img className='ml-2 w-12 pb-2' src={ApacheSparkLogo} />],
    ["MySql Logo", <img className='ml-2 w-4' src={MySqlLogo} />],
    ["Python Logo", <img className='ml-2 w-8' src={PythonLogo} />],
    ["Selenium Logo", <img className='ml-2 w-8' src={SelemiumLogo} />],
    ["C++ Logo" , <img className='ml-2 w-6' src={CppLogo} />],
    ["Express Logo", <img className='ml-2 w-6 ' src={ExpressLogo} />],
    ["OneAPI Logo", <img className='ml-2 w-16' src={OneApiLogo} />],
    ["MongoDB Logo", <img className='ml-2 w-16 ' src={MongoDbLogo} />],
    ["Node Logo", <img className='ml-2 w-4' src={NodeLogo} />],
    ["Cuda Logo", <img className='ml-2 w-12 ' src={CudaLogo} />],
    ["OpenGL Logo", <img className='ml-2 w-14' src={OpenGLLogo} />],
    ["React Logo", <img className='ml-2 w-6' src={ReactLogo} />],
]);

const ProjectNames = [
    "PowerBot: MAQ",
    "Event Analysis",
    "Flight Simulator",
    "College Scheduler",
    "MLSC Cryptic Hunt Portal",
    "Intel OneAPI Code Maven Hackathon",
    "Blue Yonder Hack",
] as const 

type TProject = typeof ProjectNames[number]

const ProtectToTechStack:Map<TProject, ETechnologyUsed[]> = new Map([
    ["PowerBot: MAQ", ["Selenium Logo", "Python Logo", "Apache Spark Logo"]] as [TProject, ETechnologyUsed[]],
    ["Flight Simulator", ["OpenGL Logo", "C++ Logo"]] as [TProject, ETechnologyUsed[]],
    ["MLSC Cryptic Hunt Portal", ["Node Logo","Express Logo", "MongoDB Logo"]] as [TProject, ETechnologyUsed[]],
    ["Blue Yonder Hack", ["Python Logo"]] as [TProject, ETechnologyUsed[]],
    ["Event Analysis", ["Cuda Logo"]] as [TProject, ETechnologyUsed[]],
    ["College Scheduler", ["React Logo", "MySql Logo", "Node Logo", "Express Logo"]] as [TProject, ETechnologyUsed[]],
    ["Intel OneAPI Code Maven Hackathon", ["OneAPI Logo", "C++ Logo"]] as [TProject, ETechnologyUsed[]],
])

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
        "Blue Yonder Hack", 
        WebTelemetryMountingEventHOC(BlueYonderHackathon, "Blue Yonder Hack")],
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
        "Blue Yonder Hack", 
        "A Monte Carlo Tree Search implementation to solve the logistics problem of optimal trucking."
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
                            <p className='text-xs font-normal'>
                                {ProjectDescription.get(project_name)!}
                            </p>
                            <div className='flex mt-2 absolute bottom-2 right-2' > 
                                {ProtectToTechStack.get(project_name)!.map(x => TechnologyUsedAssets.get(x)!)}
                            </div>

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