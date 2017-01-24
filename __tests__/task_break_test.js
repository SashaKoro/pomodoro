import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Task_Break from '../src/components/task_break';

describe('Task_Break', () => {
  it('should be selectable by class name', () => {
    const wrapper = shallow(<Task_Break/>);
    expect(wrapper.is('.Task_Break')).toBe(true);
  });
  it('should mount to a DOM', () => {
    const wrapper = mount(<Task_Break/>);
    expect(wrapper.find('.Task_Break').length).toBe(1);
  });
  it('should have a selectable addTask button', () => {
    const wrapper = shallow(<Task_Break/>);
    expect(wrapper.find('.addTask').length).toBe(1);
  });
});
