import React from 'react';

const NavBar:React.FC<{
    projectSelected:string|null
}> = ({
    projectSelected
}) => {
    if(projectSelected){
        return <></>
    }
    return (
        <div className='w-full h-8 flex justify-center mt-4 text-slate-600 sticky top-0 bg-white z-50'>
            <div className='w-full lg:w-4/5 flex justify-between MaratSansRegularFont text-lg'>
                <div className='hidden lg:block w-3/5'>
                    <p>
                        RAGHAV KUMAR
                    </p>
                </div>
                <div className='flex w-full justify-evenly lg:w-3/5 pl-4'>
                    <button 
                        onClick={()=>{
                            const element = document.getElementById("AboutMeScreen");
                            element?.scrollIntoView({
                                behavior:"smooth"
                            });
                        }}
                    >
                        About
                    </button>
                    <button 
                        onClick={()=>{
                            const element = document.getElementById("ProjectsScreen");
                            element?.scrollIntoView({
                                behavior:"smooth"
                            });
                        }}
                    >
                        Projects
                    </button>
                    <button 
                        onClick={()=>{
                            const element = document.getElementById("ContactMeScreen");
                            element?.scrollIntoView({
                                behavior:"smooth"
                            });
                        }}
                    >
                        Contacts
                    </button>
                </div>
            </div>
        </div>
    )
}

export {NavBar}