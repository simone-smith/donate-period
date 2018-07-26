import React from 'react';
import ReactDom from 'react-dom';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';

import { mount } from 'enzyme';

import Wishlist from '../src/wishlist.js'
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import 'whatwg-fetch';

describe('<Wishlist />', () => {

  describe('Render', () => {

    it("An error is displayed", async () => {
        let wishlist = shallow(<Wishlist/>);

        wishlist.setState({
            error: true,
            isLoaded: true,
            items: []
        });

        expect(wishlist.text()).toEqual("Error: ")
    });

    it("The page is loading", async () => {
        let wishlist = shallow(<Wishlist/>);

        wishlist.setState({
            error: false,
            isLoaded: false,
            items: []
        });

        expect(wishlist.text()).toEqual("Loading...")
    });

    it("Items are displayed", async () => {
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
