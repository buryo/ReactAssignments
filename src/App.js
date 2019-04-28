import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import ColorCode from './components/ColorCode';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Route path="/" component={Home} exact/>
        <Route path="/colorcode" component={ColorCode} />
        <Route path="/contact" component={Contact} />
      </Router>
    </div>
  );
}

export default App;