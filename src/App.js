import React from 'react'
import Home from './Home'
import About from './About'
import Page3 from './Page3'
import Page4 from './Page4'
import Page5 from './Page5'
import Page6 from './Page6'
import Contact from './Contact'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Work from './Work'


const App = () => {
  return (
    <>
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/work' element={<Work/>}/>
    </Routes>
  </Router>
    
    <About/>
    <Page3/>
    <Page4/>
    <Page5/>
    <Page6/>
    
    <Contact/>
    </>
  )
}

export default App