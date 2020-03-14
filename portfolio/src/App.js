import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home/home';
import Footer from './components/Footer';
import Contact from './components/contact/contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <Contact />
      <Footer />
    </Router>

  );
}

export default App;
