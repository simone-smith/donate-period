import React from 'react';
import ReactDom from 'react-dom';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import CheckboxWithLabel from '../src/index.js'
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

test("CheckboxWithLabel displays a wishlist on the page", () => {
  const hello = shallow(<CheckboxWithLabel />);
  expect(hello.text()).toEqual("Hello")
});
