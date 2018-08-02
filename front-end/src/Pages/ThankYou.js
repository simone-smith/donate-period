import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Donate extends Component {
    render() {
        return (
            <div>
                <h1 className="p-4 display-4 text-center text-secondary">You've made our day!</h1>

                <p className={"text-secondary"}>
                    Thank you so much for your donation! Your support will have an immediate impact on the charity you selected. From both of us, thank you! We'll handle the logistics of getting getting your donation to the charity, so sit back and smile, because you've done something amazing today!
                </p>

                <p className="p-4 text-monospace text-center text-secondary">
                <Link to={'/Charities'}>
                    <button className="btn btn-primary active" type="button">Donate to another charity!</button>
                </Link>
                </p>
            </div>
        );
    }
}

export default Donate;
