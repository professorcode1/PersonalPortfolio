import Cookies from 'js-cookie';

const GetSessionToken:()=>string|undefined = ()=>Cookies.get("session-token")
const SetSessionToken:(a:string)=>void = (token:string)=>Cookies.set("session-token", token)

export {GetSessionToken, SetSessionToken}