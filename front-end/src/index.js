import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './components/app';
import About from './components/about';
import CharitiesBuilder from './components/charitiesBuilder';

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/about' component={About} />
        <Route path='/charities' component={CharitiesBuilder} />
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);
