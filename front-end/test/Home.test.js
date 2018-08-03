import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

import Home from '../src/Pages/Home.js'

describe('<Home />', () => {
  let home = shallow(<Home />)

  it('renders without crashing', () => {
    expect(home.find('h1').exists()).toBe(true);
  });

  it('contains a heading', () => {
    expect(home.find('h1').text()).toEqual("Donate, Period")
  })

});
