import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Designs from './Components/Designs';
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <box>
      <Router>
        <Navbar />
        <Projects />
        <Designs />
        <Contact />

      </Router>
        </box>
    </>
  )
}

export default App
