import React from 'react';
import ReactDom from 'react-dom';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Charity from '../src/components/charity.js'
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

test("Charity displays a link on the page", () => {
  const wrapper = shallow(<Charity />);
  const input = wrapper.find('input');
  expect(input.render().attr('value')).toEqual("Charity's Wishlist")
});