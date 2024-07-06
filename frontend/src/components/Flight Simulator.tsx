import React from 'react';
import TypeIt from "typeit-react";
import FlightSimulatorGif from "../assets/flight simulator.webp"
import { WebTelemetryAnchor } from './WebTelAnchor';
import { ProjectBaseTemplate } from './ProjectBaseTemplate';
import { RoughNotation } from 'react-rough-notation';

const FlightSimulatorDescription:React.FC<{}> = () => {
    return (
        <>

                <ol className='text-base m-4 list-decimal'>
                    <li className='m-4'>
                    Created
                    <RoughNotation type='underline' show={true} > 
                &nbsp; Flight Simulator &nbsp; 
                </RoughNotation> 
                    
                     in C++ using 
                     
                     <RoughNotation type='underline' show={true} > 
                &nbsp; OpenGL  &nbsp; 
                </RoughNotation> 
                      where the player pilots over procedurally generated terrain. 
                    </li>
                    <li className='m-4'>
                        Implemented Perlin noise using compute shaders to create the terrain as well as implemented LOD and infinite scrolling. 
                        </li>
                    <li className='m-4'>
                        The cloud meshes are displaced using flow fields and it uses a trivial lighting model of ambient light hitting all meshes.                         
                    </li>
                </ol>

        </>
    )
}

const FlightSimulatorButton:React.FC<{}> = () => {
    return (
        <>
        <WebTelemetryAnchor
            className="m-2 p-2 rounded-lg border border-black w-24 text-center"
            href="https://github.com/professorcode1/Computer-Graphics-Project/tree/master"
            >
            Github
        </WebTelemetryAnchor>
        <WebTelemetryAnchor
            className="m-2 p-2 rounded-lg border border-black w-36 text-center"
            href='/flightsimulator'
            >
            Check it out!
        </WebTelemetryAnchor>
        </>
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