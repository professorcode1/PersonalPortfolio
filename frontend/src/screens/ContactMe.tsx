import React from 'react';
import { EventAnalysis } from '../components/EventAnalysis';
import { FlightSimulator } from '../components/Flight Simulator';
import { CollegeScheduler } from '../components/College Scheduler';
import { MLSCHuntPortal } from '../components/MLSC Cryptic Hunt Portal';
import { IntelHackathon } from '../components/Intel Hackathon';
import { BlueYonderHackathon } from '../components/Blue Yonder Hackathon';
import { PowerBot } from '../components/PowerBot';
import GmailLogo from "../assets/gmail.webp"
import LinkedinLogo from "../assets/LinkedIn_icon.png"
import InstagramLogo from "../assets/instagram logo.png"
import { WebTelemetryAnchor } from '../components/WebTelAnchor';
const ContactMe:React.FC<{
}> = ({
}) =>{
    return (
        <div id="ContactMeScreen" className='h-screen flex flex-col  justify-evenly items-center '>
            <div className='w-4/5 flex justify-center lg:justify-start pt-8 pb-8'>
                <h1 className='text-5xl MarartSansBoldFont'>
                    Contact Me
                </h1>
            </div>
            <div 
                className='h-4/5 w-4/5 relative overflow-hidden text-black text-xl flex items-center justify-center' 
            >
                <div>
                    <p className='pb-4'>
                        Here's all the ways we can get in touch!
                    </p>
                    <div className='flex justify-between  md:justify-around w-full items-center'>
                        <WebTelemetryAnchor href='mailto:raghkum2000@gmail.com' >
                            <img src={GmailLogo} style={{
                                height:"5rem",
                                width:"5rem"
                            }} />
                        </WebTelemetryAnchor>
                        <WebTelemetryAnchor href='https://www.linkedin.com/in/raghavkumar02/'>
                            <img src={LinkedinLogo} style={{
                                height:"3.1rem",
                                width:"3.1rem"
                            }}  />
                        </WebTelemetryAnchor>
                        <WebTelemetryAnchor href='https://www.instagram.com/blackcatsnchords/'>
                            <img src={InstagramLogo} style={{
                                height:"5rem",
                                width:"5rem",
                            }} />
                        </WebTelemetryAnchor>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {ContactMe}
