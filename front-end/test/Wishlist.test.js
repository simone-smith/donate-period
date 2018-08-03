import React from 'react';
import ReactDom from 'react-dom';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Wishlist from '../src/Pages/Wishlist.js'
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import 'whatwg-fetch';
global.fetch = require('jest-fetch-mock');

describe('<Wishlist />', () => {

  const globalProps = { match: { params: { id: "2201" } } }

  describe("ComponentDidMount", () => {

    it("Calls fetch", () => {
      const props = {
        ...globalProps,
      };
      let wishlist = shallow(<Wishlist {...globalProps} />);
      expect(fetch).toHaveBeenCalledTimes(1);
    });

    describe('Changes state on successful fetch', () => {

      beforeEach(() => {
          fetch.mockImplementation(() => {
              const promise = new Promise((resolve, reject) => {
                  resolve({
                      ok: true,
                      json: function () {
                          return [{item: 'test item'}];
                      }
                  });
                  reject({})
              });
              return promise;
          });
      });

      it('Updates the component state', () => {
          const props = {
            ...globalProps,
          };
          const wrapper = shallow(<Wishlist {...globalProps} />);
          setImmediate(() => {
              wrapper.update();
              expect(wrapper.state('items')).toEqual([{item: 'test item'}]);
          });
      });
    });

  describe('Render', () => {

    it("An error is displayed", () => {
      const props = {
        ...globalProps,
      };
      let wishlist = shallow(<Wishlist {...globalProps} />);

        wishlist.setState({
            error: true,
            isLoaded: true,
            items: []
        });

        expect(wishlist.text()).toEqual("Error: ")
    });

    it("The page is loading", () => {
      const props = {
        ...globalProps,
      };
      let wishlist = shallow(<Wishlist {...globalProps} />);

      wishlist.setState({
          error: false,
          isLoaded: false,
          items: []
        });

        expect(wishlist.text()).toEqual("Loading...")
    });

    });

  });

});
