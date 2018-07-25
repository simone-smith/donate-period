import React from 'react';
import Wishlist from './wishlist'

export default class Charity extends React.Component {
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
