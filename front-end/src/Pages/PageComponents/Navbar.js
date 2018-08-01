import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="container">
            <div className="d-flex justify-content-center row-hl">
                <div className="p-4 item-hl">Flex Item</div>
                <div className="p-4 item-hl">Flex Item</div>
                <div className="p-4 item-hl">
                    <Link to={'/Home'}>Home</Link>{" | "}
                    <Link to={'/Charities'}>Charity List</Link>{" | "}
                    <Link to={'/About'}>About Us</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;