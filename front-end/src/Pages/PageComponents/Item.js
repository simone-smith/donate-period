import React, { Component } from 'react';

class Item extends Component {

  constructor(props) {
      super(props);
      const listItems = props.listItems
      this.state = {
        checked: true,
        count: 0,
        total: 0
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
    setTimeout( () => { this.updateTotal() }, 30);
  }

  handleDecrease() {
    if(this.state.count === 0){
      this.setState({
        count: 0
      });
    } else {
      this.setState({
        count: this.state.count - 1
      });
      setTimeout( () => { this.updateTotal() }, 30);
    }
  }

  updateTotal() {
    this.setState({
      total: this.state.count * parseFloat(this.props.price)
    })
  }

  render() {
    const { itemName, description, price, image, total } = this.props;
    return (
      <div>
        <p>{itemName}</p>
        <p>{description}</p>
        <p>£{price}</p>
        <button onClick={ () => this.handleIncrease() }>Up</button>
        <p>{this.state.count}</p>
        <button onClick={ () => this.handleDecrease() }>Down</button>
        <br/>
        <p>Total: £{this.state.total}</p>
        <img src={image} height="42" width="auto" alt={itemName}></img>
        <input type='checkbox' onChange={ () => this.handleChange() }/>
        <div>{this.props.children}</div>
      </div>
    )
  }
};

export default Item;
