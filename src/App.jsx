import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/ProfileSection/Profile';
import Skills from './components/Skills/Skills';
import { WorkExperience } from './components/WorkExperience/WorkExperience';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';

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
        <ContactMe />

      </div>
      <Footer />
    </>
  )
}

export default App