import React from 'react';
import { shallow } from 'enzyme';
import Headline from './';

import { findByTestAttr } from '../../util';

const setup = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe('Headline Component', () => {

  describe('Have props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: 'Test Header',
        desc: 'Some test description.'
      };
      wrapper = setup(props);
    });

    it('should render without errors', () => {
      const component = findByTestAttr(wrapper, 'Headline Component');
      expect(component.length).toBe(1);
    });

    it('should render a h1', () => {
      const h1 = findByTestAttr(wrapper, 'header');
      expect(h1.length).toBe(1);
    });

    it('should render a desc', () => {
      const desc = findByTestAttr(wrapper, 'desc');
      expect(desc.length).toBe(1);
    });

  });

  describe('Have NO props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup();
    });

    it('should not render', () => {
      const component = findByTestAttr(wrapper, 'Headline Component');
      expect(component.length).toBe(0);
    });
  });
  
});