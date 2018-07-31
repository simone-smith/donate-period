import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
        <div>
            HOME PAGE CONTENT HERE
            <br></br>
            <Link to={'/Charities'}>View our charity partners</Link>
            {" "}
            <Link to={'/About'}>About</Link>
        </div>
    );
  }
}

export default Home;
