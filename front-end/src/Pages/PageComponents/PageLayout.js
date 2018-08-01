import React from 'react';
import {Link} from "react-router-dom";


import Navbar from "./Navbar";

const PageLayout = (props) => {
    return (
            <div className="d-flex flex-column row-hl">
                <div className="p-4 item-hl"><Navbar/></div>
                <div className="p-4 item-hl">{props.children}</div>
                <div className="p-4 item-hl">footer here</div>
            </div>
    );
};

export default PageLayout;