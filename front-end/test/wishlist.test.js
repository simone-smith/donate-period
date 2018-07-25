import React from 'react';
import ReactDom from 'react-dom';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Wishlist from '../src/wishlist.js'
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import 'whatwg-fetch';

test("Wishlist displays a wishlist on the page", () => {
  const wishlist = shallow(<Wishlist />);
  expect(wishlist.text()).toEqual("toilet paper, sanitary pads, tampons, wet wipes")
});
