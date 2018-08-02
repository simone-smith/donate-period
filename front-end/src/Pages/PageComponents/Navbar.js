import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
            <div className="d-flex flex-lg-nowrap justify-content-between blue p-1">
                <div className="p-0 m-1">
                    <img src={'./static/img/page/spacer.gif'} height={1} width={30}/>
                    <Link to={'/'}>
                        <button className="btn blue text-white btn-lg" type="button">LOGO</button>
                    </Link>
                </div>
                <div className="p-0 m-0"> </div>
                <div className="p-0 m-0 d-inline-block text-white">
                    <Link to={'/Charities'}>
                        <button className="btn blue text-white btn-sm" type="button">CHARITY LIST</button>
                    </Link>
                    <img src={'./static/img/page/spacer.gif'} height={55} width={1}/>
                    <Link to={'/About'}>
                        <button className="btn blue text-white btn-sm" type="button">ABOUT US</button>
                    </Link>
                    <img src={'./static/img/page/spacer.gif'} height={1} width={120}/>
                </div>
            </div>
    );
};

export default Navbar;