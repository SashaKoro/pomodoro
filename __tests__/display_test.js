import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Display from '../src/components/display';

describe('Display', () => {
  it('is selectable by class name', () => {
    const wrapper = shallow(<Display/>);
    expect(wrapper.is('.Display')).toBe(true);
  });
  it('mounts to a DOM', () => {
    const wrapper = mount(<Display/>);
    expect(wrapper.find('.Display').length).toBe(1);
  });
});
