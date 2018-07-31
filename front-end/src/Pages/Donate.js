import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Donate extends Component {

  render() {
    return (
      <div>
        <Link to={'/wishlist'}>Back</Link>
        {" "}
        <Link to={'/charitiesBuilder'}>Cancel</Link>
      </div>
    );
  }
}

export default Donate;
