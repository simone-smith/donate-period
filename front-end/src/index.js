import React from 'react';
import ReactDOM from 'react-dom';
import Wishlist from './wishlist';

class App extends React.Component {
  render() {
    return (
      <Wishlist />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
