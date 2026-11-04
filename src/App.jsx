import './App.css';
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/ProfileSection/Profile';
import About from './components/About/About';
import { WorkExperience } from './components/WorkExperience/WorkExperience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';

const App = () =>
{
  return (
    <>
      <Background />
      <Navbar />
      <main className='container'>
        <Profile />
        <About />
        <WorkExperience />
        <Projects />
        <Skills />
        <Education />
        <ContactMe />
      </main>
      <Footer />
    </>
  )
}

export default App
