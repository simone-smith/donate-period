
import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import CharitiesBuilder from './Pages/CharitiesBuilder';
import Wishlist from './Pages/Wishlist';
import Donate from './Pages/Donate';

class Router extends Component {

    render() {
        return (
                <Switch>
                    <Route path='/' exact component={Home}  />
                    <Route path='/About' component={About} />
                    <Route path='/Charities' component={CharitiesBuilder} />
                    <Route path='/Wishlist' exact component={Wishlist} />
                    <Route path='/Wishlist/:id' exact component={Wishlist} />
                    <Route path='/Donate' component={Donate} />
                </Switch>
        );
    }
}

export default Router;