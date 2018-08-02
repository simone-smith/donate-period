import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Charity from './PageComponents/Charity';
import SearchFilter from './PageComponents/SearchFilter'

class CharitiesBuilder extends Component {
  constructor(props) {
    super(props);
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
    const reducedCharities = charities.slice(0, 7)
    return (
      <div>
        <SearchFilter charities={ charities }/>
        <div>
          <Link to={'/'}>Back</Link>
        </div>
      </div>
    );
  }
}

export default CharitiesBuilder;
