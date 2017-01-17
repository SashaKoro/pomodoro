import React, {Component} from 'react';
import styled from 'styled-components';
import Display from './display';
import TimerButtons from './timerButtons';
import Task_Break from './task_break';

const Tomato = styled.div`
  background-color: #B70101;
  height: 300px;
  width: 350px;
  margin: auto;
  margin-top: 75px;
  border-radius: 60px 60px 130px 130px;
`;

const Name = styled.div`
  margin: auto;
  font-size: 40px;
  text-align: center;
  font-family: "Brush Script MT", cursive;
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
  border-radius: 120px 120px 0px 0px;
`;

class Pomodoro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: '25:00',
      taskTime: 25,
      breakTime: 5,
    };

    this.Timer = this.Timer.bind(this);
    this.startTheTimer = this.startTheTimer.bind(this);
    this.pauseTheTimer = this.pauseTheTimer.bind(this);
    this.changeTaskTime = this.changeTaskTime.bind(this);
    this.changeBreakTime = this.changeBreakTime.bind(this);
  }


  startTheTimer(){
    this.Loop = setInterval(this.Timer, 1000);
  }

  pauseTheTimer(){
    clearInterval(this.Loop);
  }

  Timer(){
    this.setState({ time: this.state.time - 1});
  }

  changeTaskTime(value){
    let newDualState = this.state.taskTime + value;
    this.setState({ taskTime: newDualState });
    let stringState = newDualState.toString() + ':00';
    this.setState({ time: stringState })
  }

  changeBreakTime(value){
    this.setState({ breakTime: this.state.breakTime + value })
  }

  render(){
    return(
      <div>
        <Tomato>
          <Name>Pomodoro</Name>
          <Display
            displayOutput={this.state.time} />
          <TimerButtons
            start={this.startTheTimer}
            pause={this.pauseTheTimer}
          />
        </Tomato>
        <Vine>
          <Task_Break
            taskTime={this.state.taskTime}
            breakTime={this.state.breakTime}
            taskModify={this.changeTaskTime}
            breakModify={this.changeBreakTime} />
        </Vine>
        <Ground/>
      </div>
    );
  }
};

export default Pomodoro;
