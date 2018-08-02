import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="blue p-4 d-flex flex-row text-white small">
            <div className = "mp-0">
                LIST YOUR CHARITY<br/>
                <p className={"mt-2"}>We are ready to help share your needs<br/>
                <a className={"text-white"} href={`mailto:join@donate-period.com?Subject=Hello%20again`}>
                    join@donate-period.com</a></p>
            </div>
            <div className={"ml-4 pl-2 p-0"}>
                CONTACT US<br/>
                <p className={"mt-2"}>50 Commercial St, London E1 6LT<br/>
                    +44 20 3817 8870</p>
            </div>
            <div className = "ml-4 pl-2 p-0" >
                JOBS<br/>
                <p className={"mt-2"}>We are looking for jobs. Check out our GitHub: <br/>
                <a className={"text-white"} href={`https://github.com/simone-smith/donate-period`}>
                    Donate, Period</a></p>
            </div>
        </div>
    )
};

export default Footer;
