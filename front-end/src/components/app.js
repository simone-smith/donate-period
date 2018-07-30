import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import CharitiesBuilder from './charitiesBuilder';
import About from './about';

class App extends Component {
  render() {
    return (
        <div>
          THIS IS THE HOME PAGE....
          <Link to={'/charities'}>
            View our charity partners
          </Link>
          {" "}
          <Link to={'/about'}>
            About
          </Link>
        </div>
    );
  }
}

export default App;
