import React, { Component } from 'react';

class SearchBar extends Component {

  constructor() {
    super();
    this.state = { value: ""};
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.state.value)
  }

  handleSubmit(event) {
    this.props.searchQuery(event);
    // or add in alternative functionality for the on onSubmit
    // might not need to have handleChange
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
