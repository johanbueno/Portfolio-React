import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home/home';
import Footer from './components/Footer';
import Contact from './components/contact/contact';
import Portfolio from './components/portfolio';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home}/>
      <Route exact path="/contact"component={Contact} />
      <Route exact path="/portfolio"component={Portfolio}>
      </Route>
      
      <Footer />
    </Router>

  );
}

export default App;
