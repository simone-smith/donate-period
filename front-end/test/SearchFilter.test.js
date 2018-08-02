import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })
import SearchFilter from '../src/Pages/PageComponents/SearchFilter';

describe('<SearchFilter />', () => {
  let searchFilter = shallow(<SearchFilter charities={ [{ name : "Alzheimer's Society" }] }/>)

  describe('Renders the search filter', () => {

    it('Creates a form component', () => {
      expect(searchFilter.find('form').exists()).toBe(true);
    });

  describe('When typing a search query', () => {
    let charityName = 'Test Charity';

    beforeEach(() => {
      searchFilter.find('input').at(0).simulate('change', {
        target: { value: charityName }
      });
    });

    it('.handleChange updates the text in state', () => {
      expect(searchFilter.state().searchFilter).toEqual(charityName)
    });

    })

  })

})
