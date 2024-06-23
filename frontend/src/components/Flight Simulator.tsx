import React from 'react';
import TypeIt from "typeit-react";
import FlightSimulatorGif from "../assets/flight simulator.webp"
import { WebTelemetryAnchor } from './WebTelAnchor';
import { ProjectBaseTemplate } from './ProjectBaseTemplate';

const FlightSimulatorDescription:React.FC<{}> = () => {
    return (
        <>
            <TypeIt options={{speed:0.01}}>
                <ol className='text-base m-4 list-decimal'>
                    <li className='m-4'>
                    Created Flight Simulator in C++ using OpenGL where the player pilots over procedurally generated terrain. 
                    </li>
                    <li className='m-4'>
                        Implemented Perlin noise using compute shaders to create the terrain as well as implemented LOD and infinite scrolling. 
                        </li>
                    <li className='m-4'>
                        The cloud meshes are displaced using flow fields and it uses a trivial lighting model of ambient light hitting all meshes.                         
                    </li>
                </ol>
            </TypeIt>
        </>
    )
}

const FlightSimulatorButton:React.FC<{}> = () => {
    return (
    <WebTelemetryAnchor
        className="m-2 p-2 rounded-lg border border-black w-24 text-center"
        href="https://github.com/professorcode1/Computer-Graphics-Project/tree/master"
    >
        Github
    </WebTelemetryAnchor>
    )
}

const FlightSimulator:React.FC<{}> = () => {
    return <ProjectBaseTemplate
        name='Flight Simulator'
        asset={FlightSimulatorGif}
        description={<FlightSimulatorDescription />}
        buttons={<FlightSimulatorButton />}
     />;

}

export {FlightSimulator}