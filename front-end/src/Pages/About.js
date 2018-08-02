import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div className="pageContainer">
          <h1 className="p-2 display-4 text-center text-secondary">About Us</h1>
          <p className="text-monospace text-center text-secondary">Founded: July 23, 2018</p>
          <p className={"m-2 text-monospace text-justify text-secondary"}>
              Donate, Period is a web platform that connects donors with the items
              charities need most. We exist to ensure that no great cause is without
              the products needed to provide their valuable services to our community.
          </p>
          <div className="d-flex">
              <div className="mr-auto p-2">
                  <img src={'./static/img/page/spacer.gif'} height={1} width={375}/>
                  <div className="text-left text-secondary">
                      <h4 className={"ml-4 mb-3"}>How do we do this?</h4>
                          <p className={"list-group-item"}>
                              We work with registered charities to create wishlists of their most needed items.
                          </p>
                          <p className={"list-group-item"}>
                              We source these items in bulk at wholesale prices.
                          </p>
                          <p className={"list-group-item"}>
                              We invite individuals to purchase and donate these items through our online platform
                              for the causes they care about most.</p>
                          <p className={"list-group-item"}>
                              We handle the logistics of delivering the items to the charity.
                          </p>
                  </div>
              </div>
              <div className="p-2 text-secondary">
                  <img src={'./static/img/page/spacer.gif'} height={1} width={375}/>
                  <div className="text-left">
                      <h4 className={"ml-4 mb-3"}>What’s with the name?</h4>
                        <p className={"list-group-item"}>
                            Donate, Period was originally created to solve the problem of charities
                            serving vulnerable women not having enough sanitary products to meet the
                            needs of the individuals they served. Our belief was that there was a platform
                            that would both make donors aware of the charity’s needs and provide them with
                            a way to make a donation, this problem could be easily resolved.
                            Sanitary products continue to be some of our top donated items.
                        </p>
                  </div>
              </div>
          </div>
          <p className="p-4 text-monospace text-center text-secondary">
              <Link to={'/charities'}>
                  <button className="btn btn-primary active" type="button">View our charity partners</button>
              </Link>
              {" "}
              <Link to={'/'}>
                  <button className="btn btn-primary active" type="button">Home</button>
              </Link>
          </p>
      </div>
    )
  }
}

export default About;
