import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListFormat from './PageComponents/ListFormat'

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
      fetch('http://localhost:3010/api/charities/' + this.props.match.params.id)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
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
            <ListFormat items={items} />
            <p className="p-4 text-monospace text-right text-secondary">
                <Link to={'/Charities'}>
                    <button className="btn btn-primary active" type="button">Back</button>
                </Link>
                {" "}
                <Link to={'/Donate'}>
                    <button className="btn btn-primary active" type="button">Donate Now</button>
                </Link>
            </p>
        </div>
      );
    }
  }
}

export default Wishlist;
