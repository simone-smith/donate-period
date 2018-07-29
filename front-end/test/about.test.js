import React from 'react';
import ReactDom from 'react-dom';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

import About from '../src/components/about.js'

describe('<About />', () => {

  let about = shallow(<About />)

  it('Renders the About title', () => {
    console.log(about.debug())
    expect(about.find('h1').text()).toEqual('About Us')
  });


  it('Displays the about info', () => {
    let aboutInfo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    expect(about.find('p').at(0).text()).toEqual(aboutInfo)
  });
});
