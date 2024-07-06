import React from 'react';
import TypeIt from 'typeit-react';
import { WebTelemetryAnchor } from './WebTelAnchor';
import { ProjectBaseTemplate } from './ProjectBaseTemplate';
import { RoughNotation } from 'react-rough-notation';

const BlueYonderDemandDescription:React.FC<{}> = () =>{
    return (
        // <TypeIt options={{speed:0.02, afterComplete:()=>setStartNotation(true)}}   >
        <ol className='text-base m-4 list-decimal'>
            <li className='m-4'>
                Solved the optimization problem of minimising truck space wastage while also minimising expected wait time of orders.
            </li>
            <li className='m-4'>
                Implemented the 
                <RoughNotation type='underline' show={true} >
                &nbsp; Monte Carlo Tree Search algorithm. 
                </RoughNotation>
            </li>
            <li className='m-4'>
                The Monte Carlo Tree Search worked by exploring different demands based on their probability and simulating different responses to see which simulated response is best over the long term.
            </li>
            <li className='m-4'>
                The problem inputs were: list of stores, list of products, capacity of truck, capacity of warehouse, production capacity of factory and a probability distribution of demand of products for each store over some time period.    
            </li>
        </ol>
        // </TypeIt>
    )
}

const BlueYonderDemandButton:React.FC<{}> = () => {
    return (
        <WebTelemetryAnchor 
            className="m-2 p-2 rounded-lg border border-black w-24 text-center"
            href="https://github.com/professorcode1/BlueYonderDemandSupply"
        >
            Github
        </WebTelemetryAnchor>
    )
}

const BlueYonderHackathon:React.FC<{}> = () => {
    return <ProjectBaseTemplate
        name='Blue Yonder Hack'
        asset={null}
        description={<BlueYonderDemandDescription />}
        buttons={<BlueYonderDemandButton />}
    />

}

export {BlueYonderHackathon}