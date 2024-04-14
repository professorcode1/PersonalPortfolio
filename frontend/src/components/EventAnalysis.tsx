import TypeIt from "typeit-react";

import React from 'react';
import { WebTelemetryAnchor } from "./WebTelAnchor";

const EventAnalysis:React.FC<{

}> = () => {
    return (
        <div className='h-screen flex items-center justify-center font-mono'>
            <div className='w-3/5 h-4/5 bg-white relative'>
                <p className='mt-2 ml-2 text-3xl font-bold pl-6'>Event Analysis</p>
                
                <TypeIt options={{speed:0.01}}>
                <ol className='text-base m-4 list-decimal'>
                    <li className='m-4'>
                        Open Sourced the first library that contains both &nbsp;
                        <a className='text-blue-600 visited:text-purple-600' href='https://arxiv.org/abs/1508.03534'>
                        Event Coincidence Analysis (ECA) 
                        </a>
                        &nbsp;and&nbsp; 
                        <a className='text-blue-600 visited:text-purple-600' href='https://pubs.aip.org/aip/cha/article-abstract/30/3/033102/1030599/Event-synchrony-measures-for-functional-climate?redirectedFrom=fulltext'>
                        Event Synchronisation (ES): 
                        </a>
                        algorithms that are used to find correlation 
                        b/w event series with applications like detecting extreme climate events.
                    </li>
                    <li className='m-4'>
                        The only other FOSS library that contains ECA is &nbsp;
                        <a className='text-blue-600 visited:text-purple-600' href='https://www.sciencedirect.com/science/article/abs/pii/S0098300416305489'>
                            CoinCalc
                        </a>
                        &nbsp;
                         in R. This library is 180 times faster than 
                        CoinCalc on CPU and 7200 times faster on GPU. 
                    </li>
                    <li className='m-4'>
                        The library was downloaded &nbsp;
                        <a className='text-blue-600 visited:text-purple-600' href='https://pypistats.org/packages/event-analysis'> 
                            over 800 times
                        </a>
                        &nbsp; in the first 48 hours of its release.
                    </li>
                    </ol>
                </TypeIt>
                <div className="w-full flex justify-center text-base absolute bottom-4">
                    <WebTelemetryAnchor
                        className="m-2 p-2 rounded-lg border border-black w-24 text-center"
                        href="https://github.com/professorcode1/Event-Analysis"
                    >
                        Github
                    </WebTelemetryAnchor>
                    <WebTelemetryAnchor 
                        className="m-2 p-2 rounded-lg border border-black w-24 text-center"
                        href="https://pypi.org/project/event-analysis/"
                    >
                        PyPi
                    </WebTelemetryAnchor>

                </div>
            </div>
        </div>
    )
}

export {EventAnalysis}