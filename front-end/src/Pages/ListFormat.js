import React, { Component } from 'react';
import Item from './PageComponents/Item.js'

class ListFormat extends Component {

  constructor(props) {
    super(props);
    const items = props.items
    const listItems = items.map(item => (
      <Item key={item['id']} itemName={item['itemName']} description={item['itemDescription']} price={item['itemPrice']} image={item['itemImage']}/>
    ))
  }

  render() {
    return(
      <ul>
        {listItems}
      </ul>
    )
  };
};

export default ListFormat;
