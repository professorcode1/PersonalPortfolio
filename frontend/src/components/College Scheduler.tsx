import React from 'react';
import TypeIt from 'typeit-react';
import { WebTelemetryAnchor } from './WebTelAnchor';
import CollegeScedulerGif from "../assets/collegetimetableschedulerflow.webp";
import { ProjectBaseTemplate } from './ProjectBaseTemplate';
import { RoughNotation } from 'react-rough-notation';

const CollegeSchedulerDescription:React.FC<{}> = () => {
  return (
    <ol className='text-base m-4 list-decimal'>
        <li className='m-4'>
          Created a web application for my university as my Software Engineering 
          course project that allows a university to input their scheduling constraints 
          and 

<p className='whitespace-nowrap	'>

          <RoughNotation type='underline' show={true} > 
              &nbsp; generate a schedule &nbsp; 
            </RoughNotation>
</p>
          
           
        </li>
        <li className='m-4'>
          The problem of scheduling translates to the NP hard problem of graph coloring 
          which I solved by implementing 2 meta heuristic algorithms: 
          
          <p className='whitespace-nowrap	'>
            <RoughNotation type='underline' show={true} > 
              &nbsp; Ant Colony Optimization and Genetic Algorithm. 
            </RoughNotation> 
          </p>
        </li>
    </ol>
  )
}

const CollegeSchdulerButton:React.FC<{}> = () => {
  return (
    <>
    <WebTelemetryAnchor
        className="m-2 p-2 rounded-lg border border-black w-36 text-center"
        href="https://github.com/professorcode1/College-Time-Table-Scheduler"
        >
        Github
    </WebTelemetryAnchor>
    <WebTelemetryAnchor
        className="m-2 p-2 rounded-lg border border-black w-36 text-center"
        href='/collegeSchduler'
        >
        Check it out!
    </WebTelemetryAnchor>
    </>

  )
}

const CollegeScheduler:React.FC<{

}> = () => {
  return <ProjectBaseTemplate
      name="College Scheduler"
      asset={CollegeScedulerGif}
      description={<CollegeSchedulerDescription />}
      buttons={<CollegeSchdulerButton />}
    />;
}

export {CollegeScheduler}