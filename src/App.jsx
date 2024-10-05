import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/ProfileSection/Profile';
import Skills from './components/Skills/Skills';
import { WorkExperience } from './components/WorkExperience/WorkExperience';
import Projects from './components/Projects/Projects';

const App = () =>
{
  return (
    <>
      <Navbar />
      <div className='container'>
        <Profile />
        <Skills />
        <WorkExperience />
        <Projects />
      </div>
    </>
  )
}

export default App