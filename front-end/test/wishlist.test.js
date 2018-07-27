import React from 'react';
import ReactDom from 'react-dom';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Wishlist from '../src/wishlist.js'
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import 'whatwg-fetch';
global.fetch = require('jest-fetch-mock');

describe('<Wishlist />', () => {

  describe("ComponentDidMount", () => {

    it("Saves the request response in items", () => {
      let wishlist = shallow(<Wishlist/>);
      expect(fetch).toHaveBeenCalledTimes(1);
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

        expect(wishlist.text()).toEqual( "toilet papersanitary padstamponswet wipes")
    });

  });

});
