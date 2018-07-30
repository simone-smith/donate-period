import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Charity from './charity';

class CharitiesBuilder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      charities: []
    };
  }

  componentDidMount() {
    fetch('https://api.justgiving.com/2605491e/v1/charity/search', {
      method: "GET",
      headers: {
        "Content-Type" : "application/json"
      },
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            charities: result.charitySearchResults
          });
        },
      )
  }

  render() {
    const { charities } = this.state;
    return (
      <div>
      <div>
      <ul>
      {charities.map(charity => (
        <li key={charity['charityId']}>
          { charity['name']} <br></br>
          { charity['description'] }<br></br>
          { charity['registrationNumber'] }<br></br>
          <img src= { charity['logoUrl'] } height="42" width="auto"></img><br></br>
          <Link to={`/wishlist/${charity['charityId']}`}>
            Our Wishlist
          </Link>
        </li>
      ))}
      </ul>
      </div>

      <div>
        <Link to={'/'}>
          Back
        </Link>
      </div>
      </div>
    );
  }
}

export default CharitiesBuilder;
