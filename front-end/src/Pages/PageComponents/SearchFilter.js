import React, { Component } from 'react';
import Charity from './Charity.js';

class SearchFilter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchFilter: ""
    };
  }

  handleChange(event) {
    this.setState({ searchFilter: event.target.value.toLowerCase() });
  }

  render() {
    let filteredCharities = this.props.charities.filter(
      (charity) => {
        let lowerCaseName = charity.name.toLowerCase()
        return lowerCaseName.indexOf(this.state.searchFilter) !== -1;
      }
    );

    return (
      <div>
        <div>
          <p className="text-center display-4"> Our Charity Partners </p>
        </div>
        <form className='search-filter'> Search charities:
          <input type='text' placeholder='Search' onChange={ event => this.handleChange(event) } />
        </form>
        <div className="container">
          <div className="row">
            {filteredCharities.map((charity) => {
              return <Charity key={charity['charityId']} name={charity['name']}
              description={charity['description']}
              registrationNumber={charity['registrationNumber']}
              logoUrl={charity['logoUrl']} charityId={charity['charityId']} />
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchFilter;
