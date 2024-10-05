import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/ProfileSection/Profile';
import Skills from './components/Skills/Skills';
import { WorkExperience } from './components/WorkExperience/WorkExperience';

const App = () =>
{
  return (
    <>
      <Navbar />
      <div className='container'>
        <Profile />
        <Skills />
        <WorkExperience />
      </div>
    </>
  )
}

export default App