import React from 'react';
import TypeIt from 'typeit-react';

const IntelHackathon:React.FC<{

}> = () => {
    return (
        <div className='h-screen flex items-center justify-center font-mono'>
            <div className='w-3/5 h-4/5 bg-white relative  items-center overflow-y-scroll'>
                <p className='mt-2 ml-2 text-3xl font-bold pl-6	'>
                    Intel OneAPI Code Maven Hackathon
                </p>

                <div className='w-full flex flex-col items-center mt-4 p-2 '>
                    <a 
                        className="w-4/5"
                        href="https://github.com/professorcode1/IntelHack/tree/main"
                    >
                        <img 
                            src='./Intel Hack Plot.png'
                            className='w-full'
                        />
                    </a>
                    <TypeIt options={{speed:0.01}}>
                    <ol className='text-base m-4 list-decimal'>
                        <li className='m-4'>
                            GPU accelerated a Monte Carlo sampling algorithm such that it can predict 
                            stocks for the next month in under 1 minute.
                        </li>
                    </ol>
                    </TypeIt>

                </div>

                <div className="w-full flex justify-center text-base ">
                    <a 
                        className="m-2 p-2 rounded-lg border border-black w-24 text-center"
                        href="https://github.com/professorcode1/IntelHack/tree/main"
                    >
                        Github
                    </a>

                </div>
            </div>
        </div>
    )
}

export {IntelHackathon}