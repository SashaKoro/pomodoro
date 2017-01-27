import React, { Component, } from 'react';
import styled from 'styled-components';
import Display from './display';
import TimerButtons from './timerButtons';
import TaskBreak from './task_break';
import toastr from 'toastr';

const Tomato = styled.div`
  background-color: #B70101;
  height: 300px;
  width: 350px;
  margin: auto;
  margin-top: 75px;
  border-radius: 60px 60px 130px 130px;
`;

const Name = styled.div`
  color: black;
  margin: auto;
  font-size: 48px;
  text-align: center;
  font-family: "Brush Script MT", cursive, Arial;
`;

const Vine = styled.div`
  background-color: #247307;
  height: 180px;
  width: 70px;
  margin: auto;
`;

const Ground = styled.div`
  margin: auto;
  height: 90px;
  width: 300px;
  background-color: #7F683A;
  border-radius: 120px 120px 5px 5px;
`;

class Pomodoro extends Component {
  constructor (props) {
    super (props);

    this.state = {
      tickTime: '25:00',
      taskTime: 25,
      breakTime: 5,
      isBreakNext: true,
      startDisabled: false,
    };

    this.Timer = this.Timer.bind(this);
    this.startTheTimer = this.startTheTimer.bind(this);
    this.pauseTheTimer = this.pauseTheTimer.bind(this);
    this.changeTaskTime = this.changeTaskTime.bind(this);
    this.changeBreakTime = this.changeBreakTime.bind(this);
  }


  startTheTimer () {
    this.setState({ startDisabled: true, });
    this.LoopOfTime = setInterval(this.Timer, 1000);
  }

  pauseTheTimer () {
    this.setState({ startDisabled: false, });
    clearInterval(this.LoopOfTime);
  }

  Timer () {
    let [minutes, seconds,] = this.state.tickTime.split(':');
    if (seconds !== '00') {
      seconds = (Number(seconds) - 1).toString();
      if (seconds.length === 1) {
        seconds = `0${seconds}`;
      }
    } else if (seconds === '00' && minutes !== '0') {
      minutes = (Number(minutes) - 1).toString();
      seconds = '59';
    } else if (this.state.isBreakNext) {
      this.playSound();
      toastr.success('Break Time!');
      minutes = this.state.breakTime;
      seconds = '00';
      this.setState({ isBreakNext: false, });
    } else {
      this.playSound();
      toastr.success('Back to it!');
      minutes = this.state.taskTime;
      seconds = '00';
      this.setState({ isBreakNext: true, });
    }
    this.setState({ tickTime: `${minutes}:${seconds}`, });
  }

  playSound () {
    let sound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
    sound.play();
  }

  changeTaskTime (value) {
    let newTaskTime = this.state.taskTime + value;
    this.setState({ taskTime: newTaskTime, });
    if (this.state.isBreakNext) this.setState({ tickTime: `${newTaskTime.toString()}:00`, });
  }

  changeBreakTime (value) {
    let newBreakTime = this.state.breakTime + value;
    this.setState({ breakTime: newBreakTime, });
    if (!this.state.isBreakNext) this.setState({ tickTime: `${newBreakTime.toString()}:00`, });
  }

  render () {
    return (
      <div className="Pomodoro">
        <Tomato>
          <Name>Pomodoro</Name>
          <Display
            displayOutput={this.state.tickTime}
          />
          <TimerButtons
            start={this.startTheTimer}
            pause={this.pauseTheTimer}
            ifRunning={this.state.startDisabled}
          />
        </Tomato>
        <Vine>
          <TaskBreak
            taskTime={this.state.taskTime}
            breakTime={this.state.breakTime}
            taskModify={this.changeTaskTime}
            breakModify={this.changeBreakTime}
            ifRunning={this.state.startDisabled}
          />
        </Vine>
        <Ground />
      </div>
    );
  }
}

export default Pomodoro;
