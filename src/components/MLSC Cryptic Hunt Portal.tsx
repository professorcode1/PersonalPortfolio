import React from 'react';
import TypeIt from 'typeit-react';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const MLSCHuntPortal:React.FC<{

}> = () => {
    return (
        <div className='h-screen flex items-center justify-center font-mono'>
            <div className='w-3/5 h-4/5 bg-white relative  items-center overflow-y-scroll'>
                <p className='mt-2 ml-2 text-3xl font-bold pl-6	'>MLSC Cryptic Hunt Portal</p>

                  <div className='w-full flex flex-col items-center mt-4 p-2 '>
                    <Splide className='border border-black w-full' > 
                      <SplideSlide>
                        <img 
                          src='./MLSC Landing Page.png'
                          className='w-full'
                        />
                      </SplideSlide>
                      <SplideSlide>
                        <img 
                          src='./MLSC Register Page.png'
                          className='w-full'
                        />
                      </SplideSlide>
                      <SplideSlide>
                        <img 
                          src='./MLSC Question Page.png'
                          className='w-full'
                        />
                        </SplideSlide>
                        <SplideSlide>
                          <img 
                            src='./MLSC Leaderboard Page.png'
                            className='w-full'
                          />
                        </SplideSlide>
                    </Splide>

                    <TypeIt options={{speed:0.01}}>
                    <ol className='text-base m-4 list-decimal'>
                        <li className='m-4'>
                            Engineered, programmed, and launched a portal for an Online Cryptic Hunt 
                            in which 130+ teams participated and 12,000+ answers were submitted.

                        </li>

                    </ol>
                    </TypeIt>
                </div>

                <div className="w-full flex justify-center text-base ">
                    <a 
                        className="m-2 p-2 rounded-lg border border-black w-24 text-center"
                        href="https://github.com/professorcode1/MSCProject"
                    >
                        Github
                    </a>

                </div>
            </div>
        </div>
    )
}

export {MLSCHuntPortal}