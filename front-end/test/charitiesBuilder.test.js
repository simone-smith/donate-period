import React from 'react';
import ReactDom from 'react-dom';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import CharitiesBuilder from '../src/components/charitiesBuilder.js'
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import 'whatwg-fetch';
global.fetch = require('jest-fetch-mock');

describe('<CharitiesBuilder />', () => {

  describe("ComponentDidMount", () => {

    it("Calls fetch", () => {
      let charitiesBuilder = shallow(<CharitiesBuilder/>);
      expect(fetch).toHaveBeenCalledTimes(1);
    });

    describe('Changes state on successful fetch', () => {

      beforeEach(() => {
          fetch.mockImplementation(() => {
              const promise = new Promise((resolve, reject) => {
                  resolve({
                      ok: true,
                      json: function () {
                          return {"suggestQuery" : null,
                          "charitySearchResults": [{charityID: '2201'}]};
                      }
                  });
                  reject({})
              });
              return promise;
          });
      });

      it('Updates the component state', () => {
        const wrapper = shallow(<CharitiesBuilder/>);
        setImmediate(() => {
            wrapper.update();
            expect(wrapper.state('charities')).toEqual([{charityID: '2201'}]);
        });
      });
    });
  });

  describe('Render', () => {

    it("Charities' info are displayed", () => {
      const wrapper = shallow(<CharitiesBuilder/>);
        wrapper.setState({
            charities: [ {
             "charityId": "2201",
             "name": "Alzheimer's Society",
             "charityDisplayName": "Alzheimer's Society",
             "registrationNumber": "Registered charity No. 296645",
             "description": "Alzheimer’s Society is transforming the\r\nlandscape of dementia forever.\r\nUntil the day we find a cure, we will create a\r\nsociety where those affected by dementia\r\nare supported and accepted, able to live in\r\ntheir community without fear or prejudice.",
             "logoFileName": "6ad95821-1a25-43ba-8f62-05216b3fd4fc.jpg",
             "logoUrl": "http://images.justgiving.com/image/6ad95821-1a25-43ba-8f62-05216b3fd4fc.jpg",
             "countryCode": "GB"
         } ]
        });
        let description = "Alzheimer’s Society is transforming the\r\nlandscape of dementia forever.\r\nUntil the day we find a cure, we will create a\r\nsociety where those affected by dementia\r\nare supported and accepted, able to live in\r\ntheir community without fear or prejudice."
        expect(wrapper.find('li').text()).toEqual( expect.stringContaining("Alzheimer's Society"))
        expect(wrapper.find('li').text()).toEqual( expect.stringContaining("Registered charity No. 296645"))
        expect(wrapper.find('li').text()).toEqual( expect.stringContaining(description))
      });

    it("Charities' logo is displayed", () => {
      const wrapper = shallow(<CharitiesBuilder/>);
        wrapper.setState({
            charities: [ {
             "charityId": "2201",
             "name": "Alzheimer's Society",
             "charityDisplayName": "Alzheimer's Society",
             "registrationNumber": "Registered charity No. 296645",
             "description": "Alzheimer’s Society is transforming the\r\nlandscape of dementia forever.\r\nUntil the day we find a cure, we will create a\r\nsociety where those affected by dementia\r\nare supported and accepted, able to live in\r\ntheir community without fear or prejudice.",
             "logoFileName": "6ad95821-1a25-43ba-8f62-05216b3fd4fc.jpg",
             "logoUrl": "http://images.justgiving.com/image/6ad95821-1a25-43ba-8f62-05216b3fd4fc.jpg",
             "countryCode": "GB"
         } ]
        });
        const img = wrapper.find('img')
        expect(img.render().attr('src')).toEqual("http://images.justgiving.com/image/6ad95821-1a25-43ba-8f62-05216b3fd4fc.jpg")
      });
    });
});
