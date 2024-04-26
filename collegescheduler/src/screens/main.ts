import * as React from "react"
import { Landing } from "./Landing"
import { Register } from "./Resgister"
import { Login } from "./Login"
import { ViewSchedules } from "./ViewSchedules"
import { Homescreen } from "./Homescreen"
import { DaysHoursScreen } from "./DaysHours"
import { GroupScreen } from "./Group"
import { ProfessorScreen } from "./Professor"
import { RoomScreen } from "./Room"
import { CourseScreen } from "./Course"
const SCREENS = [
    "Landing",
    "Homescreen",
    "Register",
    "Login",
    "View Schedules",
    "DaysHours",
    "Group",
    "Professor",
    "Room",
    "Course"
] as const 

type EScreen = typeof SCREENS[number]
const ScreenNameToComponentMapping = new Map<EScreen, React.FC<{}>>([
    ["Landing", Landing],
    ["Register", Register],
    ["Login", Login],
    ["View Schedules", ViewSchedules],
    ["Homescreen", Homescreen],
    ["DaysHours", DaysHoursScreen],
    ["Group", GroupScreen],
    ["Professor", ProfessorScreen],
    ["Room", RoomScreen],
    ["Course", CourseScreen]
])

export type {EScreen}
export {ScreenNameToComponentMapping}