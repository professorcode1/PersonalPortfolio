import * as React from "react";

const Navbar:React.FC<{}> = () => {
    return (
        <div style={{
            zIndex:10000
        }}
        className="flex items-center justify-between fixed top-0 left-0 bg-black text-white py-2  w-screen"
        >
            <div className="flex items-around">
                <p className="px-2">
                                        Homepage
                </p>
                <p className="px-2">
                                        Days/Hours
                </p>
                <p className="px-2">
                                        Professor
                </p>
                <p className="px-2">
                                        Group
                </p>
                <p className="px-2">
                                        Room
                </p>
                <p className="px-2">
                                        Course
                </p>
            </div>
            <div>
                <p className="px-2">
                    Genereate Schedule
                </p>
            </div>
        </div>
    )
}

export {Navbar}