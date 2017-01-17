import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
`;

const P = styled.p`
  font-size: 22px;
  text-align: center;
`;

const Control = styled.div`
  width: 200px;
  margin-top: -20px;
`;

const Button = styled.button`
  font-size: 30px;
  text-align: center;
  line-height: 20px;
  margin-left: -30px;
  height: 30px;
  width: 30px;
  background-color: #A5B922;
`;

const PlusButton = styled.button`
  font-size: 30px;
  line-height: 20px;
  margin-left: -20px;
  height: 30px;
  width: 30px;
  background-color: #A5B922;
`;

const Output = styled.output`
  text-align: left;
  width: 70px;
  margin-right: 0px;
  margin-left: 20px;
  font-size: 32px;
`;

const Task_Break = ({taskTime, breakTime, taskModify, breakModify}) => {

  const subtractTask = () => taskModify(-1);

  const addTask = () => taskModify(1);

  const subtractBreak = () => breakModify(-1);

  const addBreak = () => breakModify(1);


  return(
    <Div>
        <P>Task</P>
      <Control>
        <Button onClick={subtractTask}>-</Button>
        <Output>{taskTime}</Output>
        <PlusButton onClick={addTask}>+</PlusButton>
      </Control>
        <P>Break</P>
      <Control>
        <Button onClick={subtractBreak}>-</Button>
        <Output>{breakTime}</Output>
        <PlusButton onClick={addBreak}>+</PlusButton>
      </Control>
    </Div>
  );
};

export default Task_Break;
