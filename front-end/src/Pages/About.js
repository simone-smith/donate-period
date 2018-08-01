import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {

  render() {
    return (
      <div className="pageContainer">
        <h1>About Us</h1>
         <p>Founded: July 23, 2018</br>
         Donate, Period is a web platform that connects donors with the item charities need most. We exists to ensure that no great cause is without the products needed to provide their valuable services to our community.</br></br>
         How do we do this?</br>
         We work with registered charities to create wishlists of their most needed items.</br>
         We source these items in bulk at wholesale prices.</br>
         We invite individuals to purchase and donate these items through our online platform for the causes they care about most.</br>
         We handle the logistics of delivering the items to the charities</br></br>

         What’s with the name?</br>
         Donate, Period was originally created to solve the problem of charities serving vulnerable women not having enough sanitary products to meet the needs of the individuals they served. Our belief was that is there was a platform that would both make donors aware of the charity’s needs and provide them with a way to make a donation, this problem could be easily resolved. Sanitary products continue to be some of our top donated items.
         </p><br>
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
