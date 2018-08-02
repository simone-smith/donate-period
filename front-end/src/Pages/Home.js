import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
        <divs>
            <h1 className="p-4 display-4 text-center">Donate, Period</h1>
            <p className="m-2 text-monospace text-center text-secondary">
                Giving individuals the power to make impactful donations by connecting them with the items charities need most.
            </p>
            <p className={"text-secondary"}>
                <br/>
                Charities often have certain needed items that are expensive to purchase and also aren’t items are typically donated. Donors want to make impactful donations, but often don’t know what items the charity need to operate. Donate, Period solves this problem from both ends by creating a platform to connect donors with the items charities need most.
            </p>
            <p></p>
            <p className="p-4 text-monospace text-center text-secondary">
            <Link to={'/Charities'}>
                <button className="btn btn-primary active" type="button">View our charity partners</button>
            </Link>
            {" "}
            <Link to={'/About'}>
                <button className="btn btn-primary active" type="button">About</button>
            </Link>
            </p>
        </divs>
    );
  }
}

export default Home;
