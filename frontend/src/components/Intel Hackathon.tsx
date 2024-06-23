import React from 'react';
import TypeIt from 'typeit-react';
import IntelHackPlot from "../assets/Intel Hack Plot.png"
import { WebTelemetryAnchor } from './WebTelAnchor';
import { ProjectBaseTemplate } from './ProjectBaseTemplate';
import { RoughNotation } from 'react-rough-notation';


const IntelHackDescription:React.FC<{}> = () => {
    return (
        <ol className='text-base m-4 list-decimal'>
            <li className='m-4'>
                GPU accelerated a

                <RoughNotation type='underline' show={true} > 
                &nbsp; Monte Carlo sampling algorithm &nbsp; 
                </RoughNotation>
                 such that it can
                 
                 <RoughNotation type='underline' show={true} > 
                &nbsp; predict 
                stocks&nbsp; 
                </RoughNotation> 
                 for the next month in under 1 minute.
            </li>
        </ol>
    )
}
const IntelButton:React.FC<{}> = () => {
    return (
    <WebTelemetryAnchor 
        className="m-2 p-2 rounded-lg border border-black w-24 text-center"
        href="https://github.com/professorcode1/IntelHack/tree/main"
    >
        Github
    </WebTelemetryAnchor>
    )
}

const IntelHackathon:React.FC<{}> = () => {
    return <ProjectBaseTemplate
        name="Intel OneAPI Code Maven Hackathon"
        description={<IntelHackDescription />}
        buttons={<IntelButton />}
        asset={IntelHackPlot}
        />

}

export {IntelHackathon}