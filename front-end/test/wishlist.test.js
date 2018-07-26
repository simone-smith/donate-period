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

        wishlist.render(wishlist.state);

        expect(wishlist.text()).toEqual("Error: ")
    });

  });


});