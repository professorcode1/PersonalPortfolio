import * as React from "react"
import { useAppDispatch } from "../redux/main";
import { setScreen } from "../redux/screen";
import RegisterImage from "../assets/register_img.jpeg"
const Register:React.FC<{}> = ()=>{
    const [LoginFormState, setLoginFormState] = React.useState({
        username:"",
        password:"",
        email:"",
        useSample:false
    });
    const dispatcher = useAppDispatch();
    return (
        <div className="relative h-screen w-screen">
            <img src={RegisterImage} className="h-screen w-screen absolute top-0 left-0" />
            <div className="absolute h-screen w-screen top-0 left-0">
                <div className="h-full w-full flex items-center justify-center">
                    <div className="bg-white h-2/3 w-2/3 rounded opacity-90 p-4 flex flex-col justify-between">
                        <p className="text-3xl font-bold text-black">Register</p>
                        <div className="flex mt-4">
                            <p className="text-xl mr-2 w-24">Username</p>
                            <input 
                                className="bg-white border-black border-2" 
                                value={LoginFormState.username}
                                onChange={(event)=>setLoginFormState({
                                    ...LoginFormState,
                                    username:event.target.value 
                                })}
                            />
                        </div>
                        <div className="flex mt-4">
                            <p className="text-xl mr-2 w-24">Email</p>
                            <input 
                                className="bg-white border-black border-2" 
                                value={LoginFormState.username}
                                onChange={(event)=>setLoginFormState({
                                    ...LoginFormState,
                                    email:event.target.value 
                                })}
                            />
                        </div>
                        <div className="flex mt-4">
                           <p className="text-xl mr-2 w-24">Password</p>
                            <input 
                                type="password" className="bg-white border-black border-2"
                                value={LoginFormState.password}
                                onChange={(event)=>setLoginFormState({
                                    ...LoginFormState,
                                    password:event.target.value,
                                })} 
                            />
                        </div>
                        <div className="flex cursor-pointer" onClick={()=>setLoginFormState({...LoginFormState, useSample:!LoginFormState.useSample})}>
                            <input 
                                type="checkbox" 
                                className="mr-4"  
                                checked={LoginFormState.useSample}
                            />
                            <p className="w-full">Use the sample schedule data of TIET Darabassi 2020</p>
                        </div>
                        <div className="flex">
                            <button 
                                className="opacity-100 w-24 bg-green-800 text-white font-bold p-2 rounded mr-2"
                            >Submit</button>
                            <button 
                                className="opacity-100 w-24 bg-sky-800 text-white font-bold p-2 rounded"
                                onClick={()=>dispatcher(setScreen("Landing"))}
                            >Back</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export {Register}