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

    it("Calls fetch", () => {
      let wishlist = shallow(<Wishlist/>);
      expect(fetch).toHaveBeenCalledTimes(1);
    });

    it("Changes items on a succesful fetch request", async () => {
      let responseObject = JSON.stringify({ 'item': 'test tampon' })
      fetch.mockResponse(responseObject);
      let wishlist = shallow(<Wishlist/>);
      // const data = await fetch();
      await wishlist.setState()

      console.log(wishlist.state().items)
      expect(wishlist.state()).toEqual(responseObject)
    })

  });

  // return fetch(fetch)
  //   .then(() => {
  //     console.log(wishlist.state().items)
  //     expect(wishlist.state()).toEqual(responseObject)
  //   });

  // describe('Render', () => {
  //
  //   it("An error is displayed", () => {
  //       let wishlist = shallow(<Wishlist/>);
  //
  //       wishlist.setState({
  //           error: true,
  //           isLoaded: true,
  //           items: []
  //       });
  //
  //       expect(wishlist.text()).toEqual("Error: ")
  //   });
  //
  //   it("The page is loading", () => {
  //       let wishlist = shallow(<Wishlist/>);
  //
  //       wishlist.setState({
  //           error: false,
  //           isLoaded: false,
  //           items: []
  //       });
  //
  //       expect(wishlist.text()).toEqual("Loading...")
  //   });
  //
  //   it("Items are displayed", () => {
  //       let wishlist = shallow(<Wishlist/>);
  //
  //       wishlist.setState({
  //           error: false,
  //           isLoaded: true,
  //           items: [
  //             { "item": "toilet paper" },
  //             { "item": "sanitary pads" },
  //             { "item": "tampons" },
  //             { "item": "wet wipes" }
  //           ]
  //       });
  //
  //       expect(wishlist.text()).toEqual( "toilet papersanitary padstamponswet wipes")
  //   });
  //
  // });

});
