import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
            <div className="d-flex justify-content-between">
                <div className="p-0 m-0l">LOGO</div>
                <div className="p-0 m-0"> </div>
                <div className="p-0 m-0">
                    <Link to={'/Home'}>Home</Link>{" | "}
                    <Link to={'/Charities'}>Charity List</Link>{" | "}
                    <Link to={'/About'}>About Us</Link>
                </div>
            </div>
    );
};

export default Navbar;