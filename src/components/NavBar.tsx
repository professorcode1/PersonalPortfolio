import React from 'react';
import { AboutMe } from '../screens/AboutMe';
import { Projects } from '../screens/Projects';

const NavBar:React.FC<{}> = () => {
    return (
        <div className='w-full h-8 flex justify-center mt-4 text-slate-600 sticky top-0 bg-white z-50'>
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

export {NavBar}