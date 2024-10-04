import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/ProfileSection/Profile';
import Skills from './components/Skills/Skills';

const App = () =>
{
  return (
    <>
      <Navbar />
      <div className='container'>
        <Profile />
        <Skills />
      </div>
    </>
  )
}

export default App