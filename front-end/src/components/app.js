import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Charity from './charity';
import About from './about';

class App extends Component {
  render() {
    return (
        <div>
          <Charity />

          <Link to={'/about'}>
            About
          </Link>
        </div>
    );
  }
}

export default App;
