import React from 'react';
import ReactDom from 'react-dom';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import CharitiesBuilder from '../src/Pages/CharitiesBuilder.js'
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import ListFormat from '../src/Pages/PageComponents/ListFormat';

describe('<Item />', () => {

  const globalProps = [{
    createdAt: "2018-08-01T12:10:02.000Z",
    id: 1,
    itemDescription: "If you have an old bicycle in good condition, consider donating it as a form of transportation. For someone struggling to make ends meet, a reliable bicycle can provide a free and fast commute to work.",
    itemImage: "http://images.justgiving.com/image/6ad95821-1a25-43ba-8f62-05216b3fd4fc.jpg",
    itemName: "Bicycle",
    itemPrice: 100,
    justGivingCharityId:2201,
    updatedAt:"2018-08-01T12:10:02.000Z"
  }]

  let listformat = shallow(<ListFormat items={globalProps}/>);

  it ('receives props', () => {
    const props = {
      ...globalProps,
    };

    expect(listformat.find('ul').text()).toEqual("<Item />");
  });

});
