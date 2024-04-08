import React from 'react';
import TypeIt from "typeit-react";
const FlightSimulator:React.FC<{

}> = () => {
    return (
        <div className='h-screen flex items-center justify-center font-mono'>
            <div className='w-3/5 h-4/5 bg-white relative  items-center overflow-y-scroll'>
                <p className='mt-2 ml-2 text-3xl font-bold pl-6	'>Flight Simulator</p>

                <div className='w-full flex flex-col items-center mt-4 p-2 '>
                    <a 
                        className="w-4/5"
                        href="https://github.com/professorcode1/Computer-Graphics-Project/tree/master"
                    >
                        <img 
                            src='./Flight Simulator.gif'
                            className='w-full'
                        />
                    </a>
                    <TypeIt options={{speed:0.01}}>
                    <ol className='text-base m-4 list-decimal'>
                        <li className='m-4'>
                            Developed a prototype game using nothing but OpenGL in which the player pilots a plane over mountainous terrain.
                        </li>
                        <li className='m-4'>
                        Infinite terrain is procedurally generated using Compute Shaders that execute in 2-10 ms
with each render of the scene taking 13-20 ms.
                        </li>
                    </ol>
                    </TypeIt>

                </div>

                <div className="w-full flex justify-center text-base ">
                    <a 
                        className="m-2 p-2 rounded-lg border border-black w-24 text-center"
                        href="https://github.com/professorcode1/Computer-Graphics-Project/tree/master"
                    >
                        Github
                    </a>

                </div>
            </div>
        </div>
    )
}

export {FlightSimulator}