import React from 'react';
import { Button, ButtonGroup, ButtonToolbar, Glyphicon } from "react-bootstrap";


import {Link} from "react-router-dom";

const PageLayout = (props) => {
    return (
        <div>
            <p>hi</p>
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