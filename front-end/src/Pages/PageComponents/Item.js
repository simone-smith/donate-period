import React, { Component } from 'react';

class Item extends Component {

  constructor(props) {
      super(props);
      const listItems = props.listItems
      this.state = {
        checked: true,
        count: 0
      };
    }

  handleChange() {
    this.setState({
      checked: (this.state.checked === true ? false : true)
    });
  }

  handleIncrease() {
    this.setState({
      count: this.state.count + 1
    });
  }

  handleDecrease() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    const { itemName, description, price, image } = this.props;
    return (
      <div>
        <p>{itemName}</p>
        <p>{description}</p>
        <p>£{price}</p>
        <button onClick={ () => this.handleIncrease() }>Up</button>
        <p>{this.state.count}</p>
        <button onClick={ () => this.handleDecrease() }>Down</button>
        <br/>
        <img src={image} height="42" width="auto" alt={itemName}></img>
        <input type='checkbox' onChange={ () => this.handleChange() }/>
        <div>{this.props.children}</div>
      </div>
    )
  }
};

export default Item;
