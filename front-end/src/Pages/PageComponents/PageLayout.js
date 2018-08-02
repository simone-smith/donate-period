import React from 'react';
import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";


const PageLayout = (props) => {
    return (
        <div className="container-fluid m-0 p-0">
            <div className="d-flex flex-column w-100 m-0 p-0">
                <div className="mp-0 item-hl"> <Navbar/> </div>
                <div className="p-4 item-hl">
                    <Content padding="220"> {props.children} </Content>
                </div>
                <div className="mp-0 item-hl"> <Footer/> </div>
            </div>
        </div>
    );

};

export default PageLayout;