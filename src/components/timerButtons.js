import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin-top: 30px;
  margin-left: 80px;
`;

const Start = styled.button`
  height: 50px;
  width: 90px;
  background-color: #CDB626;
  border-radius: 0px 0px 0px 40px;
  margin-right: 10px;
`;

const Pause = styled(Start)`
  border-radius: 0px 0px 40px 0px;
`;

const TimerButtons = ({start, pause}) => {

  const startTimer = () => start();

  const pauseTimer = () => pause();

  return(
    <Div>
      <Start onClick={startTimer}>Start</Start>
      <Pause onClick={pauseTimer}>Pause</Pause>
    </Div>
  );
};

export default TimerButtons;
