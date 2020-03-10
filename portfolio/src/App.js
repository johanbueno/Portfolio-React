import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home/home';

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
    </Router>

  );
}

export default App;
