import React from 'react';
import { shallow, mount } from 'enzyme';
import Pomodoro from '../src/components/pomodoro';
import Display from '../src/components/display';
import Task_Break from '../src/components/task_break';
import TimerButtons from '../src/components/timerButtons';

describe('Pomodoro base tests', () => {

  it('is selectable by class name', () => {
    const wrapper = shallow(<Pomodoro/>);
    expect(wrapper.is('.Pomodoro')).toBe(true);
  });
  it('should mount in a DOM', () => {
    const wrapper = mount(<Pomodoro/>);
    expect(wrapper.find('.Pomodoro').length).toBe(1);
  });
  it('should contain a Display component', () => {
    const wrapper = shallow(<Pomodoro/>);
    expect(wrapper.find(Display).length).toBe(1);
  });
  it('should contain a Task_Break element', () => {
    const wrapper = shallow(<Pomodoro/>);
    expect(wrapper.find(Task_Break).length).toBe(1);
  });
  it('should contain a TimerButtons element', () => {
    const wrapper = shallow(<Pomodoro/>);
    expect(wrapper.find(TimerButtons).length).toBe(1);
  });

  it('should have an initial tickTime state', () => {
    const wrapper = shallow(<Pomodoro/>);
    expect(wrapper.state().tickTime).toBe('25:00');
  });

  describe('Changes to state tests', () => {

    it('should modify task and break state correctly,', () => {
      const wrapper = mount(<Pomodoro/>);
      wrapper.setState({ taskTime: 20 });
      wrapper.setState({ breakTime: 5 });

      wrapper.find('.addTask').simulate('click');
      expect(wrapper.state().taskTime).toBe(21);

      wrapper.find('.subtractTask').simulate('click');
      expect(wrapper.state().taskTime).toBe(20);

      wrapper.find('.addBreak').simulate('click');
      expect(wrapper.state().breakTime).toBe(6);

      wrapper.find('.subtractBreak').simulate('click');
      expect(wrapper.state().breakTime).toBe(5);
    });

    it('should modify startDisabled state correctly', () => {
      const wrapper = mount(<Pomodoro/>);
      wrapper.setState({ startDisabled: false });

      wrapper.find('.start').simulate('click');
      expect(wrapper.state().startDisabled).toBe(true);

      wrapper.find('.pause').simulate('click');
      expect(wrapper.state().startDisabled).toBe(false);
    });

    it('modifies tickTime state correctly when it is taskTime', () => {
      const wrapper = mount(<Pomodoro/>);
      wrapper.setState({ isBreakNext: true });
      wrapper.setState({ taskTime: 25 });

      wrapper.find('.addTask').simulate('click');
      expect(wrapper.state().tickTime).toBe('26:00');

      wrapper.find('.subtractTask').simulate('click');
      expect(wrapper.state().tickTime).toBe('25:00');

      wrapper.find('.addBreak').simulate('click');
      expect(wrapper.state().tickTime).toBe('25:00');

      wrapper.find('.subtractBreak').simulate('click');
      expect(wrapper.state().tickTime).toBe('25:00');
    });

    it('modifies tickTime state correctly when it is breakTime', () => {
      const wrapper = mount(<Pomodoro/>);
      wrapper.setState({ isBreakNext: false });
      wrapper.setState({ taskTime: 25 });
      wrapper.setState({ breakTime: 5 });

      wrapper.find('.addBreak').simulate('click');
      expect(wrapper.state().tickTime).toBe('6:00');

      wrapper.find('.subtractBreak').simulate('click');
      expect(wrapper.state().tickTime).toBe('5:00');

      wrapper.find('.addTask').simulate('click');
      expect(wrapper.state().tickTime).toBe('5:00');

      wrapper.find('.subtractTask').simulate('click');
      expect(wrapper.state().tickTime).toBe('5:00');
    });


    describe('Button disabling tests', () => {

      it('should disable/enable the start/pause buttons', () => {
        const wrapper = mount(<Pomodoro/>);
        wrapper.setState({ startDisabled: false });

        wrapper.find('.start').simulate('click');
        expect(wrapper.find('.start').prop('disabled')).toBe(true);
        expect(wrapper.find('.pause').prop('disabled')).toBe(false);

        wrapper.find('.pause').simulate('click');
        expect(wrapper.find('.start').prop('disabled')).toBe(false);
        expect(wrapper.find('.pause').prop('disabled')).toBe(true);
      });

      it('should disable/enable the + / - buttons', () => {
        const wrapper = mount(<Pomodoro/>);
        wrapper.setState({ startDisabled: false });

        wrapper.find('.start').simulate('click');
        expect(wrapper.find('.subtractTask').prop('disabled')).toBe(true);
        expect(wrapper.find('.addTask').prop('disabled')).toBe(true);
        expect(wrapper.find('.subtractBreak').prop('disabled')).toBe(true);
        expect(wrapper.find('.addBreak').prop('disabled')).toBe(true);

        wrapper.find('.pause').simulate('click');
        expect(wrapper.find('.subtractTask').prop('disabled')).toBe(false);
        expect(wrapper.find('.addTask').prop('disabled')).toBe(false);
        expect(wrapper.find('.subtractBreak').prop('disabled')).toBe(false);
        expect(wrapper.find('.addBreak').prop('disabled')).toBe(false);
      });
    });

    describe('User display tests', () => {

      it('should display correct task and break times', () => {
        const wrapper = mount(<Pomodoro/>);
        wrapper.setState({ taskTime: 20 });
        wrapper.setState({ breakTime: 5 });

        wrapper.find('.addTask').simulate('click');
        expect(wrapper.find('.taskDisplay').text()).toBe('21');

        wrapper.find('.subtractTask').simulate('click');
        expect(wrapper.find('.taskDisplay').text()).toBe('20');

        wrapper.find('.addBreak').simulate('click');
        expect(wrapper.find('.breakDisplay').text()).toBe('6');

        wrapper.find('.subtractBreak').simulate('click');
        expect(wrapper.find('.breakDisplay').text()).toBe('5');
      });

      it('should display correct tickTime text to user when taskTime', () => {
        const wrapper = mount(<Pomodoro/>);
        wrapper.setState({ isBreakNext: true });
        wrapper.setState({ taskTime: 25 });

        wrapper.find('.addTask').simulate('click');
        expect(wrapper.find('.Display').text()).toBe('26:00');

        wrapper.find('.subtractTask').simulate('click');
        expect(wrapper.find('.Display').text()).toBe('25:00');

        wrapper.find('.addBreak').simulate('click');
        expect(wrapper.find('.Display').text()).toBe('25:00');

        wrapper.find('.subtractBreak').simulate('click');
        expect(wrapper.find('.Display').text()).toBe('25:00');
      });

      it('should display correct tickTime text to user when breakTime', () => {
        const wrapper = mount(<Pomodoro/>);
        wrapper.setState({ isBreakNext: false });
        wrapper.setState({ taskTime: 25 });
        wrapper.setState({ breakTime: 5 });

        wrapper.find('.addBreak').simulate('click');
        expect(wrapper.find('.Display').text()).toBe('6:00');

        wrapper.find('.subtractBreak').simulate('click');
        expect(wrapper.find('.Display').text()).toBe('5:00');

        wrapper.find('.addTask').simulate('click');
        expect(wrapper.find('.Display').text()).toBe('5:00');

        wrapper.find('.subtractTask').simulate('click');
        expect(wrapper.find('.Display').text()).toBe('5:00');
      });
    });
  });
});
