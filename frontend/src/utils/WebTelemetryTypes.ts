const WEB_TELEMETRY_EVENTS = [
    "Link Clicked",
    "Component Mounted",
    "Component Unmounted",
    "Pageview"
] as const

type EWebTelemetryEventType = typeof WEB_TELEMETRY_EVENTS[number];

interface WebTelemetryEventBase {
    type:EWebTelemetryEventType,
    time:string
    sessionId:string,
    ipaddr:string|null
}
interface WebTelemetryLinkClickEvent extends WebTelemetryEventBase{
    type:"Link Clicked"
    href:string
}
interface WebTelemetryComponentEvent extends WebTelemetryEventBase{
    type:"Component Mounted"|"Component Unmounted"
    component_name:string
}
interface WebTelemetryPageviewEvent extends WebTelemetryEventBase{
    type:"Pageview"
};

type WebTelemetryEvent = WebTelemetryPageviewEvent | WebTelemetryComponentEvent |WebTelemetryLinkClickEvent
export type {WebTelemetryEvent}