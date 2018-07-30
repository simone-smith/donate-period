import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Charity from './Charity';


class Page extends Component {
    render () {
        return (
            <div className="Page">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">charity</Link></li>

                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} />*/}
                <Route path="/" exact component={Charity} />
                {/*<Route path="/new-post" component={NewPost} />*/}
            </div>
        );
    }
}

export default Page;