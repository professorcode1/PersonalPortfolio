import React from 'react';
import { AboutMe } from './screens/AboutMe';
import { Projects, TProject } from './screens/Projects';
import { NavBar } from './components/NavBar';
import { ContactMe } from './screens/ContactMe';
import axios from 'axios';
import { GetSessionToken, SetSessionToken } from './utils/Cookie';
import { ReportWebTelemetryEvent, SetItbounceFalse, getCurrentTimeFromInterntionalServer, getIPAddress } from './utils/reportWebTelemetry';
import { URLBASE } from './utils/URLBase';
import { WebTelemetryView } from './screens/WebTelemetry';
import { WebTelemetryEvent } from './utils/WebTelemetryTypes';


function App() {
  const [projectSelected, setProjectSelected] = React.useState<TProject|null>(null);
  const [showWebTelemetryView, setShowWebTelemetryView] = React.useState(false);
  React.useEffect(()=>{
    (async ()=>{
      try {
        let potential_token = GetSessionToken();
        if(potential_token){
          console.log("got token from cookie", potential_token)
        }else{
          const tokenRequest = axios.get(URLBASE + "/webTelemetry/getNewToken", {
          });
          const new_token = (await tokenRequest).data
          console.log("generated token on server, ", new_token)
          SetSessionToken(new_token);
          potential_token = new_token;
        }
        const ipaddr = await getIPAddress();
        const web_telemetry_event:WebTelemetryEvent = {
          type:"Pageview",
          sessionId:potential_token!,
          time:await getCurrentTimeFromInterntionalServer(),
          ipaddr
        };
        const pageview_event = await ReportWebTelemetryEvent(web_telemetry_event);
        console.log("pageview_event", pageview_event)
        setTimeout(async ()=>{
          console.log("is bounce event",await SetItbounceFalse(web_telemetry_event))
        }, 5000)
      } catch (error) {
        console.log(error)
      }
    })()
  }, []);
  // @ts-ignore
  window.showWebTelemetryView = () => setShowWebTelemetryView(true)
  if(showWebTelemetryView){
    return <WebTelemetryView />
  }
  return (
    <div className={(projectSelected ? 'overflow-y-cutoff' : 'overflow-y-scroll') + " h-screen "}>
      <NavBar  projectSelected={projectSelected} />
      <AboutMe  />
      <Projects setSelectedProject={setProjectSelected} selectedProject={projectSelected} />
      <ContactMe />
    </div>
  )
}

export default App;
