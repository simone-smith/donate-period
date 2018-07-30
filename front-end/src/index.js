import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './components/app';
import About from './components/about';
import CharitiesBuilder from './components/charitiesBuilder';
import Wishlist from './components/wishlist';
import Donate from './components/donate';

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/about' component={About} />
        <Route path='/charities' component={CharitiesBuilder} />
        <Route path='/wishlist' component={Wishlist} />
        <Route path='/donate' component={Donate} />
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);
