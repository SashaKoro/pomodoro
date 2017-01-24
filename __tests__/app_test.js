import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../src/components/app.js';
import Pomodoro from '../src/components/pomodoro';

describe('App', () => {
  it('should be selectable by class name', () => {
    expect(shallow(<App />).is('.app')).toBe(true);
  });
  it('should mount in a DOM', () => {
    expect(mount(<App />).find('.app').length).toBe(1);
  });
  it('should render', () => {
    expect(shallow(<App />).contains
    (<div className="app"><Pomodoro/></div>)).toBe(true);
  });
  it('should contain a Pomodoro component', () => {
    expect(shallow(<App />).find(Pomodoro).length).toBe(1);
  });
});
