import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {

  render() {
    return (
      <div className="pageContainer">
        <h1>About Us</h1>
         <p>
         THIS IS THE ABOUT PAGE
         </p>
         <p>Find out what is happening in the world of Donate Period:</p>
          <ul>
            <li>
              <a href="https://twitter.com/">
                Follow us on Twitter
              </a>
            </li>
            <li>
              <a href="https://github.com/simone-smith/donate-period">
                What we are working on now
              </a>
            </li>
          </ul>
        <Link to={'/charities'}>
          View our charity partners
        </Link>
        {"      "}
        <Link to={'/'}>
          Home
        </Link>
      </div>
    )
  }
}

export default About;
