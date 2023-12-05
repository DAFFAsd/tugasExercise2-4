import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Landing from './components/Landing';

function App() {
  return (
    <Router>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Navbar />
        <div className="max-w-4xl w-full px-4">
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact" element={<ContactMe />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
