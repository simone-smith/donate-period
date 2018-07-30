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
                          return {charityID: '2201'};
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
              expect(wrapper.state('charities')).toEqual({charityID: '2201'});
          });
      });
    });
  });
});
