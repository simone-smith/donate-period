import React, { Component } from 'react';
import Wishlist from './Wishlist';

class CharityButton extends Component {

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

export default CharityButton;
