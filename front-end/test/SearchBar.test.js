import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })
import SearchBar from '../src/Pages/PageComponents/SearchBar';

describe('<SearchBar />', () => {
  let searchBar = shallow(<SearchBar />)

  describe('Renders the search bar', () => {

    it('Creates a form component', () => {
      expect(searchBar.find('form').exists()).toBe(true);
    });

    it('Renders a search button', () => {
      expect(searchBar.find('input').at(1).render().attr('value')).toEqual('Search');
    });

  describe('When typing a search query', () => {
    let charityName = 'Test Charity';

    beforeEach(() => {
      searchBar.find('input').at(0).simulate('change', {
        target: { value: charityName }
      });
    });

    it('.handleChange updates the text in state', () => {
      expect(searchBar.state().value).toEqual(charityName)
    });

    })

  })

})
