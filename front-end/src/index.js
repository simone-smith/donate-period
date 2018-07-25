import React from 'react';
import ReactDOM from 'react-dom';
import Charity from './charity';
import Wishlist from './wishlist';

class App extends React.Component {
  render() {
    return (
    <Charity />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
); 
