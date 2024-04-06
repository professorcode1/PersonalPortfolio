import React from 'react';
import { AboutMe } from './screens/AboutMe';
import { Projects } from './screens/Projects';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <>
    <NavBar />
    <AboutMe />
    <Projects />
    </>
  )
}

export default App;
