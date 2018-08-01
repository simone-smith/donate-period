import React from 'react';
import {Link} from "react-router-dom";

const Content = (props) => {
    return (
            <div className="d-flex justify-content-between">
                <div className="p-0"> </div>
                <div className="p-4">{props.children}</div>
                <div className="p-0"> </div>
            </div>
    );
};

export default Content;