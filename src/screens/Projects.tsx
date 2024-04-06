import React from 'react';

const rand = (min:number, max:number) => Math.floor(Math.random() * (max - min + 1) + min);

const uniqueRand = (min:number, max:number, prev:number) => {
    let next = prev;
    
    while(prev === next) next = rand(min, max);
    
    return next;
}
const combinations = [
    { configuration: 1, roundness: 1 },
    { configuration: 1, roundness: 2 },
    { configuration: 1, roundness: 4 },
    { configuration: 2, roundness: 2 },
    { configuration: 2, roundness: 3 },
    { configuration: 3, roundness: 3 }
  ];
  
const Projects:React.FC<{}> = () =>{
    const [configurationIndex, setConfigurationIndex] = React.useState(0)
    React.useEffect(()=>{
        const configChangeTimeout = setInterval(()=>{
            console.log(configurationIndex)
            setConfigurationIndex(uniqueRand(0, combinations.length-1, configurationIndex));
        }, 3000)
        return () => clearTimeout(configChangeTimeout)
    }, [])
    return (
        <div className='h-screen flex flex-col  justify-between items-center overflow-x-hidden'>
            <div className='w-3/5 flex pt-8 pb-8'>
                <h1 className='text-5xl MarartSansBoldFont'>
                    Projects
                </h1>
            </div>
            <div 
                className='h-4/5  w-3/5 relative overflow-hidden' 
                data-configuration={combinations[configurationIndex].configuration} 
                data-roundness={combinations[configurationIndex].roundness}
                id="living-shapes-wrapper"
            >
                <div className="shape cursor-context-menu"></div>
                <div className="shape cursor-context-menu"></div>
                <div className="shape cursor-context-menu"></div>
                <div className="shape cursor-context-menu"></div>
                <div className="shape cursor-context-menu"></div>
                <div className="shape cursor-context-menu"></div>
                <div className="shape cursor-context-menu"></div>
            </div>
        </div>
    )
}

export {Projects}