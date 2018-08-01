import React from 'react';
import {Link} from "react-router-dom";
import Navbar from "./Navbar";

const PageLayout = (props) => {
    return (
        <div>
        <Navbar/>
            <p>
                <Link to={'/Home'}>Home</Link>{" | "}
                <Link to={'/Charities'}>Charity List</Link>{" | "}
                <Link to={'/About'}>About Us</Link>
            </p>
            <div>{props.children}</div>
            <p>lo</p>
        </div>
    );
};

export default PageLayout;