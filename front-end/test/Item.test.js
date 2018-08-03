import React from 'react';
import ReactDom from 'react-dom';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import CharitiesBuilder from '../src/Pages/CharitiesBuilder.js'
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import Item from '../src/Pages/PageComponents/Item';

describe('<Item />', () => {

  const globalProps = {
    itemName: 'Test Name',
    description: 'This is a test product description',
    price: "2.99",
    image: "http://images.testimage1.jpg",
    total: 0
  };

  let item = shallow(<Item {...globalProps}/>);

  it('Renders the item name', () => {
    const props = {
      ...globalProps,
    };

    expect(item.find('h4').at(0).text()).toEqual(props.itemName)
  })

  it('Renders the item decription', () => {
    const props = {
      ...globalProps,
    };

    expect(item.find('p').at(1).text()).toEqual(props.description)
  })

  it('Renders the item price', () => {
    const props = {
      ...globalProps,
    };

    expect(item.find('p').at(0).text()).toEqual("£" + props.price)
  })

  it('Renders the increase button', () => {
    expect(item.find('FontAwesomeIcon').at(1).exists()).toBe(true);
  })

  it('Renders the decrease button', () => {
    expect(item.find('FontAwesomeIcon').at(0).exists()).toBe(true);
  })

  it('Renders the image', () => {
    const img = item.find('img');
    expect(img.render().attr('src')).toEqual("http://images.testimage1.jpg")
  })

  describe('On clicking increase', () => {

    beforeEach(() => {
      item.find('FontAwesomeIcon').at(1).simulate('click')
    });

    it('Increases the counter', () => {
      expect(item.state().count).toEqual(1)
      expect(item.find('div').at(9).text()).toEqual("1")
    });

  });

  describe('On clicking decrease', () => {

    beforeEach(() => {
      item.setState({ count: 1 })
      item.find('FontAwesomeIcon').at(0).simulate('click')
    });

    it('Decrease the counter', () => {
      expect(item.state().count).toEqual(0)
      expect(item.find('div').at(9).text()).toEqual("0")
    });

    it('Prevents the counter from going below zero', () => {
      item.find('FontAwesomeIcon').at(0).simulate('click')
      expect(item.state().count).toEqual(0)
      expect(item.find('div').at(9).text()).toEqual("0")
    });

  });


  describe('calculator', () => {
    const props = {
      ...globalProps,
    };

    beforeEach(() => {
      item.find('FontAwesomeIcon').at(1).simulate('click')
      item.find('FontAwesomeIcon').at(1).simulate('click')
    });

    it('Calculates the total', () => {
      setTimeout( () => {
        expect(item.state().total).toEqual(5.98)
        expect(item.find('p').at(4).text()).toEqual("Total: £5.98")
      }, 30);
    })

  })

})
