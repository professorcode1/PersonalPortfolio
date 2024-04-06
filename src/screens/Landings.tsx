import React from 'react';
import { RoughNotation } from 'react-rough-notation';
import {useAutoAnimate} from '@formkit/auto-animate/react'

const NavBar:React.FC<{}> = () => {
    return (
        <div className='w-full h-8 flex justify-center mt-4 text-slate-600 sticky top-0'>
            <div className='w-3/5 flex justify-between MaratSansRegularFont text-lg'>
                <div className='w-3/5'>
                    <p>
                        RAGHAV KUMAR
                    </p>
                </div>
                <div className='flex w-2/5 pl-4'>
                    <p className='mx-4'>About</p>
                    <p className='mx-4'>Projects</p>
                    <p className='mx-4'>Contacts</p>
                </div>
            </div>
        </div>
    )
}

const AboutMe:React.FC<{}> = () => {
    const [startNotation, setStartNotation] = React.useState(false);
    const [mainParent] = useAutoAnimate<HTMLDivElement>({
        duration:300
    });
    const [mountChildren, setMountChildren] = React.useState(false);
    React.useEffect(()=>{
        setTimeout(()=>{
            setStartNotation(true)

        }, 750)

        setTimeout(()=>{
            setMountChildren(true);
        }, 50);
    }, [])
    return (
    <div className="h-screen flex  items-center justify-center overflow-x-hidden">
        <div className='w-3/5 flex' ref={mainParent}>
        {mountChildren && <div className='w-3/5 flex flex-col justify-center h-full pr-8'>
                <p className='text-4xl MarartSansBoldFont'>
                    Hello! I am Raghav Kumar, a &nbsp;	
                    <RoughNotation type="highlight" color='#FFC5C5' show={startNotation}>
                         developer 
                    </RoughNotation>  &nbsp;	    
                    based in India
                </p>
                <p className='text-sm mt-2 '>
                    I love working on challenging problems in the domain of
                </p> 
                <p className='text-sm '>
                    <RoughNotation type='highlight' color='#ffe376' show={startNotation}>
                        Computer Graphics,  GPU Programming and  Optimisation. 
                    </RoughNotation>
                </p>
                <p className='text-sm mt-2'>
                    I got my bachelors in Computer Science at
                </p>
                <p className='text-sm'>
                    <RoughNotation type='highlight' color='#C7DCA7' show={startNotation}>
                        Thapar Institute of Engineering and Technology.
                    </RoughNotation>
                    &nbsp;
                    After that I started working at MAQ Software as Software Developer and a Data Engineer. 
                </p>
                <p className='text-sm mt-2'>
                    At MAQ I am responsible for work on the internal tool that  
                </p>
                <p className='text-sm'>
                    <RoughNotation type='highlight' color='#FFC5C5' show={startNotation}>
                        automates Power BI workloads
                    </RoughNotation>
                    &nbsp; as well as work on data engineering solutions for &nbsp;                    
                    <RoughNotation type='underline' show={startNotation}>
                    Microsoft 
                    </RoughNotation>
                    &nbsp;to improve their 
                        <a href='https://learn.microsoft.com/en-us/'> learn </a>
                    platform among many other things. 
                </p>
            </div>}
            {mountChildren && <div className='w-2/5 h-full p-4 pt-0  '>
                <img src='/Me with Cat Cropped.JPG' className='rounded-lg shadow-2xl w-64' style={{
                    objectFit:"cover"
                }} />
            </div>}
        </div>
    </div>
    )
}

function Landing() {
  return (
    <>
    <NavBar />
    <AboutMe />
    </>
  );
}

export {Landing};
