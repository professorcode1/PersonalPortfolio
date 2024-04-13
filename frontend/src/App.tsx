import React from 'react';
import { AboutMe } from './screens/AboutMe';
import { Projects, TProject } from './screens/Projects';
import { NavBar } from './components/NavBar';
import { ContactMe } from './screens/ContactMe';

function App() {
  const [projectSelected, setProjectSelected] = React.useState<TProject|null>(null);
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
