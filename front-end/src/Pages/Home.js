import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import CharitiesBuilder from './CharitiesBuilder';
import About from './About';

class Home extends Component {
  render() {
    return (
        <div>
          THIS IS THE HOME PAGE....
          <Link to={'/Charities'}>
            View our charity partners
          </Link>
          {" "}
          <Link to={'/About'}>
            About
          </Link>
        </div>
    );
  }
}

export default Home;
