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
            <div className='w-[95%] h-[95%] bg-white relative flex flex-col items-start justify-start pt-8  '>
                    <p className='mt-2 ml-2 text-3xl font-bold pl-6 pb-2 lg:pb-0'>{name}</p>

                    <div className='w-full  flex flex-col lg:flex-row items-center justify-center p-2 overflow-y-auto relative'>


                        {typeof asset === "string" && <WebTelemetryAnchor 
                            className="w-full "
                            href="https://github.com/professorcode1/College-Time-Table-Scheduler"
                        >
                            <img 
                                src={asset}
                                className='w-full h-full'
                            />
                        </WebTelemetryAnchor>
                        }
                        {typeof asset === "object" && asset}

                        <div className={"w-full pb-16 md:pb-0 h-full lg:flex lg:flex-col lg:justify-center "+(asset ===null ?'lg:w-full': 'lg:w-[45%]')}>
                            {description}
                            <div className="w-full flex justify-center text-base ">
                                {buttons}
                            </div>
                        </div>



                    </div>

            </div>
        </div>
    )  
}


export {ProjectBaseTemplate}
