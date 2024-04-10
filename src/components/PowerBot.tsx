import React from 'react';
import TypeIt from 'typeit-react';

const PowerBot:React.FC<{

}> = () => {
    return (
        <div className='h-screen flex items-center justify-center font-mono'>
            <div className='w-3/5 h-4/5 bg-white relative'>
                <p className='mt-2 ml-2 text-3xl font-bold pl-6'>
                    PowerBot
                </p>
                
                <TypeIt options={{speed:0.01}}>
                    <ol className='text-base m-4 list-decimal'>
                        <li className='m-4'>
                            Used Selenium to create an API layer on top of PowerBI service to allow programmatic control over the Power BI GUI.
                        </li>
                        <li className='m-4'>
                            The tool is used to streamline and automate creation and updation of reports following rigorous UI/UX guidelines.
                        </li>
                        <li className='m-4'>
                            The tool works by creating a selenium context and opening a report deployed in Power BI service to extract and change the report state like Visual Formatting, Column mapping and more.
                        </li>
                        <li className='m-4'>
                            The tool extracts the state of the report using DOM and changes it using Action Chains.  
                        </li>
                    </ol>
                </TypeIt>
            </div>
        </div>
    )
}

export {PowerBot}