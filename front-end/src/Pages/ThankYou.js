import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Donate extends Component {
    render() {
        return (
            <div>
                <h1 className="p-4 display-4 text-center text-secondary">Thank You!</h1>

                <p className={"text-secondary"}>
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in uienply voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat norin proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>

                <p className="p-4 text-monospace text-center text-secondary">
                <Link to={'/Charities'}>
                    <button className="btn btn-primary active" type="button">DO YOU WANT TO DONATE MORE ?</button>
                </Link>
                </p>
            </div>
        );
    }
}

export default Donate;
