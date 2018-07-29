import React, { Component } from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom'
import Charity from './charity';
import About from './about';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Charity />

          <Link to={'/about'}>
            About
          </Link>
          <Switch>
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
