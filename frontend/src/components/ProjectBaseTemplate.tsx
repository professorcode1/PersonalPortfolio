import React from 'react';
import { WebTelemetryAnchor } from './WebTelAnchor';

const ProjectBaseTemplate:React.FC<{
    name:string,
    asset:string|null|React.ReactNode,
    description:React.ReactNode,
    buttons:React.ReactNode
}> = ({
    name,
    asset,
    description,
    buttons
}) =>{
    return (
        <div className='h-screen flex items-center justify-center font-mono'>
            <div className='w-[95%] h-[95%] bg-white relative flex flex-col items-start justify-around overflow-y-scroll'>
                    <p className='mt-2 ml-2 text-3xl font-bold pl-6	'>{name}</p>

                    <div className='w-full h-3/4 flex flex-row items-center mt-4 p-2 '>


                        <div className={asset ===null ?'w-full': 'w-[45%]'}>
                            {description}
                        </div>

                        {typeof asset === "string" && <WebTelemetryAnchor 
                            className="w-[45%]"
                            href="https://github.com/professorcode1/College-Time-Table-Scheduler"
                        >
                            <img 
                                src={asset}
                                className='w-full h-full'
                            />
                        </WebTelemetryAnchor>
                        }
                        {typeof asset === "object" && asset}
                    </div>

                    <div className="w-full flex justify-center text-base ">
                        {buttons}
                    </div>
            </div>
        </div>
    )  
}


export {ProjectBaseTemplate}
