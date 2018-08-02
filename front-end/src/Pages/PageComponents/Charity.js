import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Charity extends Component {

  constructor(props) {
      super(props);
    }

  render() {
    const { name, description, registrationNumber, logoUrl, charityId } = this.props;
    return (
      <div className="col-sm-6 d-flex align-items-stretch p-2">
        <div className="card">
          <div className="card-body text-center">
            <img className="card-img-top img-thumbnail b-2" src={logoUrl}/>
            <h4 className="card-title">{name}</h4>
            <h6 className="mb-2 text-monospace text-secondary">{registrationNumber}</h6>
            <p className="card-text text-justify">{description}</p>
            <p className="text-center text-secondary">
              <Link to={'/wishlist/' + charityId} key={charityId}>
                <button className="btn btn-primary active" type="button">Our Wishlist</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    )
  }
};

export default Charity;
