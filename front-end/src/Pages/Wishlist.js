import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Wishlist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount(){
    fetch(`http://localhost:3010/charity/2201`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.wishlist
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
        <div>
        <Link to={'/charitiesBuilder'}>
          Back
        </Link>
        </div>
        <div>
        <ul>
        {items.map(item => (
          <li key={item['itemID']}>
            {item['itemName']}<br></br>
            {item['itemDescription']}<br></br>
            {item['itemPrice']}<br></br>
            <img src= { item['itemImage'] } height="42" width="auto"></img><br></br>
          </li>
        ))}
        </ul>
        </div>
        <div>
      <Link to={'/donate'}>
          Donate Now
        </Link>
        </div>
        </div>
      );
    }
  }
};

export default Wishlist;
