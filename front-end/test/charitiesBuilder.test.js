import React from 'react';
import ReactDom from 'react-dom';
import Enzyme from 'enzyme';
import {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import 'whatwg-fetch';
global.fetch = require('jest-fetch-mock');
import CharitiesBuilder from '../src/Pages/CharitiesBuilder.js'
import Charity from '../src/Pages/PageComponents/Charity.js'

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
        const charitiesBuilder = shallow(<CharitiesBuilder/>);
        setImmediate(() => {
            charitiesBuilder.update();
            expect(charitiesBuilder.state('charities')).toEqual([{charityID: '2201'}]);
        });
      });
    });
  });

  describe('Render', () => {

    it("Renders a list", () => {
      const charitiesBuilder = shallow(<CharitiesBuilder />);

      expect(charitiesBuilder.find('ul').exists()).toBe(true);
    })

  });

});
