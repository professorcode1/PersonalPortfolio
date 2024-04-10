import React from 'react';
import TypeIt from 'typeit-react';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const CollegeScheduler:React.FC<{

}> = () => {
    return (
        <div className='h-screen flex items-center justify-center font-mono'>
            <div className='w-3/5 h-4/5 bg-white relative  items-center overflow-y-scroll'>
                <p className='mt-2 ml-2 text-3xl font-bold pl-6	'>College Scheduler</p>

                  <div className='w-full flex flex-col items-center mt-4 p-2 '>
                    <Splide className='border border-black w-full' > 
                      <SplideSlide>
                        <img 
                          src='./College Scheduler Landing Page.png'
                          className='w-full'
                        />
                      </SplideSlide>
                      <SplideSlide>
                        <img 
                          src='./College Scheduler Home page.png'
                          className='w-full'
                        />
                      </SplideSlide>
                      <SplideSlide>
                        <img 
                          src='./College Scheduler Course Page.png'
                          className='w-full'
                        />
                        </SplideSlide>
                        <SplideSlide>
                          <img 
                            src='./College Scheduler Scheduling page.png'
                            className='w-full'
                          />
                        </SplideSlide>
                    </Splide>

                    <TypeIt options={{speed:0.01}}>
                    <ol className='text-base m-4 list-decimal'>
                        <li className='m-4'>
                          Created a web application for my university as my Software Engineering 
                          course project that allows a university to input their scheduling constraints 
                          and get a schedule as a result.
                        </li>
                        <li className='m-4'>
                          The problem of scheduling translates to the NP hard problem of graph coloring 
                          which I solved by implementing 2 meta heuristic algorithms: 
                          <b>Ant Colony Optimization and Genetic Algorithm.</b>
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

export {CollegeScheduler}