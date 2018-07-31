import React, { Component } from 'react';

class SearchBar extends Component {

  constructor() {
    super();
    this.state = {
      searchValue: ""
    };
  }

  handleChange(event) {
    this.setState({ searchValue: event.target.value });
  }

  handleSubmit(event) {
    this.props.searchQuery(event);
    // above saves the user input event as the parameter of function
    // or add in alternative functionality for the on onSubmit
    // might not need to have handleChange and just use handleSubmit to save the value and render a search component based on the value
  }

  render() {
    return (
        <form className='search-bar' onSubmit={() => this.handleSubmit(event)}>
          <input onChange={ event => this.handleChange(event) } />
          <input type="submit" value="Search" />
        </form>
    );
  }
}

export default SearchBar;
