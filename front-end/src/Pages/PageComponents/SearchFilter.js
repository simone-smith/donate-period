import React, { Component } from 'react';
import Charity from './Charity.js';

class SearchFilter extends Component {

  constructor() {
    super();
    this.state = {
      searchFilter: ""
    };
  }

  handleChange(event) {
    this.setState({ searchFilter: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ searchFilter: event.target.value });
  }

  render() {
    let filteredCharities = this.props.charities.filter(
      (charity) => {
        return charity.name.indexOf(this.state.searchFilter) !== -1;
      }
    );

    return (
      <div>
        <form className='search-filter' onSubmit={() => this.handleSubmit(event)}>
          <input onChange={ event => this.handleChange(event) } />
          <input type="submit" value="Search" />
        </form>
        <ul>
          {filteredCharities.map((charity) => {
            return <Charity charityName={charity} key={charity.charityId} />
          })}
        </ul>
      </div>
    );
  }
}

export default SearchFilter;
