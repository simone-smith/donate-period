import React from 'react';
import ReactDom from 'react-dom';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

import About from '../src/Pages/About.js'

describe('<About />', () => {

  let about = shallow(<About />)

  it('Renders the About title', () => {
    expect(about.find('h1').text()).toEqual('About Us')
  });


  it('Displays the about info', () => {
    let aboutInfo = "Founded: July 23, 2018"
    expect(about.find('p').at(0).text()).toEqual(aboutInfo)
  });

  it('Renders a Link home', () => {
    // expect(about.find('Link').render().attr('to')).toEqual("Home");
  });
});
