import React from 'react';
import {Link} from "react-router-dom";
import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";

const PageLayout = (props) => {
    return (
            <div className="d-flex flex-column row-hl">
                <div className="p-4 item-hl">  <Navbar/>  </div>
                <div className="p-4 item-hl">
                    <Content>{props.children}</Content>
                </div>
                <div className="p-4 item-hl">  <Footer/>  </div>
            </div>
    );
};

export default PageLayout;