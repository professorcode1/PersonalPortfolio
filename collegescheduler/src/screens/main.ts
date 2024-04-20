import * as React from "react"
import { Landing } from "./Landing"
const SCREENS = [
    "Landing",
    "Homescreen",
    "Register",
    "Login",
] as const 

type EScreen = typeof SCREENS[number]
const ScreenNameToComponentMapping = new Map<EScreen, React.FC<{}>>([
    ["Landing", Landing]
])

export type {EScreen}
export {ScreenNameToComponentMapping}