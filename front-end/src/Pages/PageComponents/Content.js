import React from 'react';


const Content = (props) => {
    return (
            <div className={"d-flex justify-content-between"}>
                <div className="pt-1000">
                    <img src={'./static/img/page/spacer.gif'} height={500} width={220}/>
                </div>
                <div className={"p-4"}>{props.children}</div>
                <div className={"p-0"}>
                    <img src={'./static/img/page/spacer.gif'} height={1} width={220}/>
                </div>
            </div>
    );
};

export default Content;