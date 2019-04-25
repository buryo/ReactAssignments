import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import ColorApp from './components/ColorApp';
// import Contact from './components/Contact';
import Navigation from './components/Navigation';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App" >

        <Router>
          <Navigation />
          <Route path="/" component={Home} exact />
          <Route path="/color-app" component={ColorApp} />
          {/* <Route path="/contact" component={Contact} /> */}
        </Router>
      </div>
    );
  }
}

export default App;