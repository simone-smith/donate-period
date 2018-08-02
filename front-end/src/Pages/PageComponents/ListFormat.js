import React, { Component } from 'react';
import Item from './Item.js'

const ListFormat = (props) => {

  const items = props.items
  const listItems = items.map(item => (
    <Item key={item['id']} itemName={item['itemName']} description={item['itemDescription']} price={item['itemPrice']} image={item['itemImage']} total={0}/>
  ))

  return(
    <ul>
      {listItems}
    </ul>
  )

};

export default ListFormat;
