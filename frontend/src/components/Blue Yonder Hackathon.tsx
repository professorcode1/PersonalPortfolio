import React from 'react';
import TypeIt from 'typeit-react';

const BlueYonderHackathon:React.FC<{

}> = () => {
    return (
        <div className='h-screen flex items-center justify-center font-mono'>
            <div className='w-3/5 h-4/5 bg-white relative'>
                <p className='mt-2 ml-2 text-3xl font-bold pl-6'>
                    Blue Yonder Demand and Supply Hackathon
                </p>
                
                <TypeIt options={{speed:0.01}}>
                    <ol className='text-base m-4 list-decimal'>
                        <li className='m-4'>
                            Solved the optimization problem of minimising truck space wastage while also minimising expected wait time of orders.
                        </li>
                        <li className='m-4'>
                            Implemented the Monte Carlo Tree Search algorithm. 
                        </li>
                        <li className='m-4'>
                            The Monte Carlo Tree Search worked by exploring different demands based on their probability and simulating different responses to see which simulated response is best over the long term.
                        </li>
                        <li className='m-4'>
                            The problem inputs were: list of stores, list of products, capacity of truck, capacity of warehouse, production capacity of factory and a probability distribution of demand of products for each store over some time period.    
                        </li>
                    </ol>
                </TypeIt>
                <div className="w-full flex justify-center text-base absolute bottom-4">
                    <a 
                        className="m-2 p-2 rounded-lg border border-black w-24 text-center"
                        href="https://github.com/professorcode1/BlueYonderDemandSupply"
                    >
                        Github
                    </a>
                </div>
            </div>
        </div>
    )
}

export {BlueYonderHackathon}