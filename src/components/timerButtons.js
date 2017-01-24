import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin-top: 30px;
  margin-left: 80px;
`;

const Start = styled.button`
  color: black;
  font-size: 20px;
  font-family: Monaco, Arial
  height: 50px;
  width: 90px;
  background-color: #CDB626;
  border-radius: 3px 3px 3px 40px;
  margin-right: 10px;
  border: none;
  
  &:hover {
    background-color: #B78701;
    cursor: pointer;
  }
  
  &:focus {
    outline: none;
    height: 54px;
    width: 94px;
  }
`;

const Pause = styled(Start)`
  border-radius: 3px 3px 40px 3px;
`;

const TimerButtons = ({start, pause, ifRunning}) => {

  const startTimer = () => start();
  const pauseTimer = () => pause();

  return(
    <Div className="TimerButtons">
      <Start className="start" disabled={ifRunning} onClick={startTimer}>Start</Start>
      <Pause className="pause" disabled={!ifRunning} onClick={pauseTimer}>Pause</Pause>
    </Div>
  );
};

export default TimerButtons;
