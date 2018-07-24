import React from 'react';
import ReactDom from 'react-dom';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Wishlist from '../src/index.js'
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

test("Wishlist displays a wishlist on the page", () => {
  const hello = shallow(<Wishlist />);
  expect(hello.text()).toEqual("Hello")
});
