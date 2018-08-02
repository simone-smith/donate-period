import React from 'react';
import ReactDom from 'react-dom';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import Charity from '../src/Pages/PageComponents/Charity.js'

describe('<Charity />', () => {

  const globalProps = {
    name: "Alzheimer's Society",
    description: "Alzheimer’s Society is transforming the\r\nlandscape of dementia forever.\r\nUntil the day we find a cure, we will create a\r\nsociety where those affected by dementia\r\nare supported and accepted, able to live in\r\ntheir community without fear or prejudice.",
    registrationNumber: "Registered charity No. 296645",
    logoUrl: "http://images.justgiving.com/image/6ad95821-1a25-43ba-8f62-05216b3fd4fc.jpg",
    charityId: "2201"
  };

  let charity = shallow(<Charity {...globalProps}/>);

  describe('Render', () => {

    it("Renders the charity info", () => {
      const props = {
        ...globalProps,
      };
      let description = "Alzheimer’s Society is transforming the\r\nlandscape of dementia forever.\r\nUntil the day we find a cure, we will create a\r\nsociety where those affected by dementia\r\nare supported and accepted, able to live in\r\ntheir community without fear or prejudice."
      expect(charity.find('h4').text()).toEqual( expect.stringContaining("Alzheimer's Society"))
      expect(charity.find('h6').text()).toEqual( expect.stringContaining("Registered charity No. 296645"))
      expect(charity.find('p').at(0).text()).toEqual( expect.stringContaining(description))
    });

    it("Charities' logo is displayed", () => {
      const props = {
        ...globalProps,
      };
      const img = charity.find('img')
      expect(img.render().attr('src')).toEqual("http://images.justgiving.com/image/6ad95821-1a25-43ba-8f62-05216b3fd4fc.jpg")
    });

  });

});
