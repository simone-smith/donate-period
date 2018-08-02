import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Charity extends Component {

  constructor(props) {
      super(props);
    }

  render() {
    const { name, description, registrationNumber, logoUrl, charityId } = this.props;
    return (
      <div>
        {name} <br/>
        {description}<br/>
        {registrationNumber}<br/>
        <img src={logoUrl} height="42" width="auto" /><br/>
        <Link to={'/wishlist/' + charityId} key={charityId}>Our Wishlist</Link>
      </div>
    )
  }
};

export default Charity;
