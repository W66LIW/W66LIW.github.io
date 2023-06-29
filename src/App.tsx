import React from 'react';
import LangButton from './components/LangButton';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';
import Education from './components/Education';
import './App.css';

function App() {
  return (
    <div id='main'>
      <div className="App">
        <LangButton/>
        <Header/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Education/>        
        <About/>
      </div> 
    </div>
  );
}

export default App;
