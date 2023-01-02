import React from 'react';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Signup from './components/Signup'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router >
      <Navbar />


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      
    </Router>
  );
}

export default App;
