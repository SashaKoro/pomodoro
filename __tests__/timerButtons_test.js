import React from 'react';
import { shallow, render, mount } from 'enzyme';
import TimerButtons from '../src/components/timerButtons';

describe('TimerButtons', () => {
  it('is selectable by class name', () => {
    const wrapper = shallow(<TimerButtons/>);
    expect(wrapper.is('.TimerButtons')).toBe(true);
  });
  it('should mount to a DOM', () => {
    const wrapper = mount(<TimerButtons/>);
    expect(wrapper.find('.TimerButtons').length).toBe(1);
  });
});
