import React from 'react';
import TypeIt from 'typeit-react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import MLSC_Landing_Page from '../assets/MLSC Landing Page.png'
import MLSC_Register_Page from '../assets/MLSC Register Page.png'
import MLSC_Question_Page from '../assets/MLSC Question Page.png'
import MLSC_Leaderboard_Page from '../assets/MLSC Leaderboard Page.png'
import { WebTelemetryAnchor } from './WebTelAnchor';
import { ProjectBaseTemplate } from './ProjectBaseTemplate';

const MLSCHuntPortalImages:React.FC<{}> = () => {
  return (
    <Splide className='border border-black w-[45%]' > 
    <SplideSlide>
      <img 
        src={MLSC_Landing_Page}
        className='w-full'
      />
    </SplideSlide>
    <SplideSlide>
      <img 
        src={MLSC_Register_Page}
        className='w-full'
      />
    </SplideSlide>
    <SplideSlide>
      <img 
        src={MLSC_Question_Page}
        className='w-full'
      />
      </SplideSlide>
      <SplideSlide>
        <img 
          src={MLSC_Leaderboard_Page}
          className='w-full'
        />
      </SplideSlide>
  </Splide>
  )
}

const MLSCHuntDescription:React.FC<{}> = () => {
  return (
    <TypeIt options={{speed:0.01}}>
    <ol className='text-base m-4 list-decimal'>
        <li className='m-4'>
            Engineered, programmed, and launched a portal for an Online Cryptic Hunt 
            in which 130+ teams participated and 12,000+ answers were submitted.

        </li>

    </ol>
    </TypeIt>
  )
}

const MLSCHuntButton:React.FC<{}> = () => {
  return (
    <WebTelemetryAnchor 
      className="m-2 p-2 rounded-lg border border-black w-24 text-center"
      href="https://github.com/professorcode1/MSCProject"
    >
      Github
    </WebTelemetryAnchor>
  )
}

const MLSCHuntPortal:React.FC<{}> = () => {
  return <ProjectBaseTemplate
    name='MLSC Cryptic Hunt Portal'
    asset={<MLSCHuntPortalImages/>}
    description={<MLSCHuntDescription />}
    buttons={<MLSCHuntButton />}
   />

}

export {MLSCHuntPortal}