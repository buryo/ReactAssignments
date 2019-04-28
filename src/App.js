import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import ColorApp from './components/ColorApp';
// import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Filtering from './components/Filtering';
import OSDetector from './components/OSDetector';
import CopyApp from './components/CopyApp';
import KebabCase from './components/Kebab-Case';

import './App.css';

class App extends Component {

  arrayToFilter = ['BMW', 'Audi', 'Seat', 'Opel', 'BMW', 'Opel'];

  render() {
    return (
      <div className="App" >

        <Router>
          <Navigation />
          <Route path="/" component={Home} exact />
          <Route path="/color-app" component={ColorApp} />
          <Route path="/filtering-array" render={props => <Filtering arrayToFilter={this.arrayToFilter} />} />
          <Route path="/os-detector" component={OSDetector} />
          <Route path="/copy-app" component={CopyApp} />
          <Route path="/kebab-case" component={KebabCase} />
        </Router>
      </div>
    );
  }
}

export default App;