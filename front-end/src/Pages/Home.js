import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
        <div>
          <p>Giving individuals the power to make impactful donations by connecting them with the items charities need most.</p></br>
          <p>Charities often have certain needed items that are expensive to purchase and also aren’t items are typically donated. Donors want to make impactful donations, but often don’t know what items the charity need to operate. Donate, Period solves this problem from both ends by creating a platform to connect donors with the items charities need most.</p></br> 
            <br></br>
            <Link to={'/Charities'}>View our charity partners</Link>
            {" "}
            <Link to={'/About'}>About</Link>
        </div>
    );
  }
}

export default Home;
