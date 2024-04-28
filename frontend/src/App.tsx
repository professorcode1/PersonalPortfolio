import React from 'react';
import { AboutMe } from './screens/AboutMe';
import { Projects, TProject } from './screens/Projects';
import { NavBar } from './components/NavBar';
import { ContactMe } from './screens/ContactMe';
import axios from 'axios';
import { GetSessionToken, SetSessionToken } from './utils/Cookie';
import { ReportWebTelemetryEvent, getCurrentTimeFromInterntionalServer } from './utils/reportWebTelemetry';
import { URLBASE } from './utils/URLBase';
import { WebTelemetryView } from './screens/WebTelemetry';


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
        await ReportWebTelemetryEvent({
          type:"Pageview",
          sessionId:potential_token!,
          time:await getCurrentTimeFromInterntionalServer()
        });
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
      <AboutMe projectSelected={Boolean(projectSelected)} />
      <Projects setSelectedProject={setProjectSelected} selectedProject={projectSelected} />
      <ContactMe />
    </div>
  )
}

export default App;
