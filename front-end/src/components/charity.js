import React, { Component } from 'react';
import Wishlist from './wishlist';

class Charity extends Component {
  constructor() {
    super();

    this.state = {
      showWishlist: false,
    };
  }

  onClick() {
    this.setState({ showWishlist: true});
  }

  render() {
    return (
      <div>
        <input type="submit" value="Charity's Wishlist" onClick={this.onClick.bind(this)} />
        {this.state.showWishlist ? <Wishlist /> : null }
      </div>
    );
  }
}

export default Charity;
