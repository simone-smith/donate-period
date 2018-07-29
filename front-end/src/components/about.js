import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {

  render() {
    return (
      <div className="pageContainer">
        <h1>About Us</h1>
         <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
        <Link to={'/'}>
          Home
        </Link>
      </div>
    )
  }
}

export default About;
