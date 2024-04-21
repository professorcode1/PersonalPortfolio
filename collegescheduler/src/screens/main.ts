import * as React from "react"
import { Landing } from "./Landing"
import { Register } from "./Resgister"
import { Login } from "./Login"
import { ViewSchedules } from "./ViewSchedules"
const SCREENS = [
    "Landing",
    "Homescreen",
    "Register",
    "Login",
    "View Schedules"
] as const 

type EScreen = typeof SCREENS[number]
const ScreenNameToComponentMapping = new Map<EScreen, React.FC<{}>>([
    ["Landing", Landing],
    ["Register", Register],
    ["Login", Login],
    ["View Schedules", ViewSchedules]
])

export type {EScreen}
export {ScreenNameToComponentMapping}