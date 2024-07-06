import React from 'react';
import { RoughNotation } from 'react-rough-notation';
import {useAutoAnimate} from '@formkit/auto-animate/react'
import MyImage from "../assets/Me with Cat low rez.jpg"
import { WebTelemetryAnchor } from '../components/WebTelAnchor';

const MyDescription:React.FC<{startNotation:boolean}> = ({startNotation}) => {
    const buttonFormatting = ' rounded-md w-96 h-8 text-sm flex items-center justify-center cursor-pointer '
    return (
        <div className='w-full lg:w-3/5 flex flex-col justify-center h-full lg:pr-8' >
                <p className='text-2xl lg:text-4xl MarartSansBoldFont'>
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
                    I am currently working at MAQ Software as Software Developer/Data Engineer. 
                </p>
                <p className='text-sm mt-2'>
                    At MAQ I am responsible for the 
                    <span className='font-bold'>
                    &nbsp;Power BI web automation tool
                    </span>&nbsp; and &nbsp;
                    <span className='font-bold'>
                        data engineering solutions for the Microsoft learn platform. 
                    </span>
                    
                </p>
                <div className='w-full lg:w-3/5 flex flex-row justify-center h-full pr-8 mt-4'>
                    <WebTelemetryAnchor href='https://www.linkedin.com/in/raghavkumar02/' className={'bg-black text-white ' + buttonFormatting}>
                        LinkedIn
                    </WebTelemetryAnchor>
                    <WebTelemetryAnchor href='https://github.com/professorcode1' className={'ml-2 border-slate-500 border ' + buttonFormatting}>
                        Github
                    </WebTelemetryAnchor>
                </div>
        </div>
    )
}

const AboutMe:React.FC<{
}> = () => {
    const [startNotation, setStartNotation] = React.useState(false);
    const [mainParent] = useAutoAnimate<HTMLDivElement>({
        duration:300
    });
    const [mountChildren, setMountChildren] = React.useState(false);
    React.useEffect(()=>{

        setTimeout(()=>{
            setMountChildren(true);
        }, 50);
    }, [])
    // if(projectSelected) return null;
    return (
    <div className="h-screen flex  items-center justify-center overflow-x-hidden " id="AboutMeScreen">
        <div className='w-4/5 flex' ref={mainParent}>
        {mountChildren && <MyDescription startNotation={startNotation} />}
            {mountChildren && <div className='w-2/5 h-full p-4 pt-0 hidden lg:block '>
                <img src={MyImage} onLoad={()=>setStartNotation(true)} className='rounded-lg shadow-2xl h-96' style={{
                    objectFit:"cover"
                }} />
            </div>}
        </div>
    </div>
    )
}


export {AboutMe};
