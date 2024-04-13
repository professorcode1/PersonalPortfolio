import React from 'react';
import { AboutMe } from './screens/AboutMe';
import { Projects, TProject } from './screens/Projects';
import { NavBar } from './components/NavBar';
import { ContactMe } from './screens/ContactMe';
import axios from 'axios';
import { GetSessionToken, SetSessionToken } from './utils/Cookie';


function App() {
  const [projectSelected, setProjectSelected] = React.useState<TProject|null>(null);
  React.useEffect(()=>{
    (async ()=>{
      try {
        const potential_token = GetSessionToken();
        if(potential_token){
          console.log("got token from cookie", potential_token)
          return ;
        }
        const tokenRequest = axios.get("http://localhost:8000/webTelemetry/getNewToken", {
        });
        const new_token = (await tokenRequest).data
        console.log("generated token on server, ", new_token)
        SetSessionToken(new_token);
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])
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
