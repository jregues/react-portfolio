import './App.css';
import React from 'react';
import Navbar from './components/navbar.jsx';
import Home from './pages/HomePage.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to My Portfolio</h1>
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;