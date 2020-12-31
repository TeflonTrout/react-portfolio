import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './Styles/Styles.css'
import Home from './components/Home'
import Nav from './components/Nav'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Router>
    </div>
  );
}

export default App;
