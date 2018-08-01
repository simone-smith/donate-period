import React from 'react';
import {Link} from "react-router-dom";

const Content = (props) => {
    return (
        <div className="container">
            <div className="d-flex justify-content-between row-hl">
                <div className="p-4 item-hl">Left Flex Item</div>
                <div className="p-4 item-hl">{props.children}</div>
                <div className="p-4 item-hl">Right Flex Item</div>
            </div>
        </div>
    );
};

export default Content;