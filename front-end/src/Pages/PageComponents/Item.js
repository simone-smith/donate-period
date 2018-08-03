import React, { Component } from 'react';
import { faArrowAltCircleDown, faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


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
          <div className="d-flex pl-4 pr-4 m-4 border rounded">
              <div className="p-2 w-100">
                  <div className="d-flex flex-nowrap">
                      <div className="order-8 p-0">
                          <p className="m-0 p-2 pr-4 text-monospace text-center text-secondary">£{price}</p>
                          <div className="pr-4"><img src={image} height="84" width="auto" alt={itemName}/></div>
                      </div>
                      <div className="order-12 p-2">
                          <h4>{itemName}</h4>
                          <p className="font-weight-normal">{description}</p>
                      </div>
                  </div>
              </div>
              <div className="p-2 flex-shrink-1 align-self-center">
                  <div className="d-flex flex-nowrap">
                      <FontAwesomeIcon onClick={ () => this.handleDecrease() } className={"mr-2 text-secondary"} size='2x' icon={faArrowAltCircleDown}/>
                        <div>
                          {this.state.count}
                        </div>
                      <FontAwesomeIcon onClick={ () => this.handleIncrease() } className={"ml-2 text-secondary"} size='2x' icon={faArrowAltCircleUp}/>
                  </div>
                    <p className="m-0 pt-3 pr-2 text-monospace text-right text-secondary">£{this.state.total}</p>
              </div>


          </div>

        <div>{this.props.children}</div>
      </div>
    )
  }
};

export default Item;
