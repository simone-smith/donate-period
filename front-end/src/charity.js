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
<<<<<<< HEAD
}
=======
} 
>>>>>>> e7029fe203d307832d842eef34d8ef2becc68968
