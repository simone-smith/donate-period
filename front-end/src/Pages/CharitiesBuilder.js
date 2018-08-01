import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
    return (
      <div>
        <div>
          <ul>
            {charities.map(charity => (
              <Charity key={charity['charityId']} name={charity['name']}
              description={charity['description']}
              registrationNumber={charity['registrationNumber']}
              logoUrl={charity['logoUrl']} charityId={charity['charityId']} />
            ))}
          </ul>
        </div>
        <div>
          <Link to={'/'}>Back</Link>
        </div>
      </div>
    );
  }
}

export default CharitiesBuilder;
