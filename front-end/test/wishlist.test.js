import React from 'react';
import ReactDom from 'react-dom';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Wishlist from '../src/components/wishlist.js'
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import 'whatwg-fetch';
global.fetch = require('jest-fetch-mock');

describe('<Wishlist />', () => {

  describe("ComponentDidMount", () => {

    it("Calls fetch", () => {
      let wishlist = shallow(<Wishlist/>);
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
          const wrapper = shallow(<Wishlist/>);
          setImmediate(() => {
              wrapper.update();
              expect(wrapper.state('items')).toEqual([{item: 'test item'}]);
          });
      });
    });

  describe('Render', () => {

    it("An error is displayed", () => {
        let wishlist = shallow(<Wishlist/>);

        wishlist.setState({
            error: true,
            isLoaded: true,
            items: []
        });

        expect(wishlist.text()).toEqual("Error: ")
    });

    it("The page is loading", () => {
        let wishlist = shallow(<Wishlist/>);

        wishlist.setState({
            error: false,
            isLoaded: false,
            items: []
        });

        expect(wishlist.text()).toEqual("Loading...")
    });

    it("Items are displayed", () => {
        let wishlist = shallow(<Wishlist/>);

        wishlist.setState({
            error: false,
            isLoaded: true,
            items: [
              { "item": "toilet paper" },
              { "item": "sanitary pads" },
              { "item": "tampons" },
              { "item": "wet wipes" }
            ]
        });
        expect(wishlist.find('ul').text()).toEqual( "toilet papersanitary padstamponswet wipes")
      });

    });

  });

});
