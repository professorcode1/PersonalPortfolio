import React from 'react';
import { EventAnalysis } from '../components/EventAnalysis';
import { FlightSimulator } from '../components/Flight Simulator';
import { CollegeScheduler } from '../components/College Scheduler';
import { MLSCHuntPortal } from '../components/MLSC Cryptic Hunt Portal';
import { IntelHackathon } from '../components/Intel Hackathon';
import { BlueYonderHackathon } from '../components/Blue Yonder Hackathon';
import { PowerBot } from '../components/PowerBot';

const ContactMe:React.FC<{
}> = ({
}) =>{
    return (
        <div id="ContactMeScreen" className='h-screen flex flex-col  justify-evenly items-center '>
            <div className='w-3/5 flex pt-8 pb-8'>
                <h1 className='text-5xl MarartSansBoldFont'>
                    Contact Me
                </h1>
            </div>
            <div 
                className='h-4/5 w-3/5 relative overflow-hidden text-black text-xl flex items-center justify-center' 
            >
                <div>
                    <p className='pb-4'>
                        Here's all the ways we can get in touch!
                    </p>
                    <div className='flex justify-around w-full'>
                        <a href='mailto:raghkum2000@gmail.com'>
                            <img src='./gmail.png' className='h-16 w-16' />
                        </a>
                        <a href='https://www.linkedin.com/in/raghavkumar02/'>
                            <img src='./linkedin drawing.jpg' className='h-16 w-16' />
                        </a>
                        <a href='https://www.instagram.com/blackcatsnchords/'>
                            <img src='instagram logo.png' className='h-16 w-16'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {ContactMe}
