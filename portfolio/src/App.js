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
      <Route exact path={["/","/home"]}>
      <Home />
      </Route>
      <Route exact path={["/","/contact"]}>
      <Contact />
      </Route>
      
      <Footer />
    </Router>

  );
}

export default App;
