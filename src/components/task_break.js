import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
`;

const P = styled.p`
  color: black;
  font-size: 22px;
  text-align: center;
`;

const Control = styled.div`
  width: 200px;
  margin-top: -20px;
`;

const Button = styled.button`
  font-size: 30px;
  line-height: 10px;
  margin-left: -35px;
  height: 35px;
  width: 35px;
  background-color: #008E00;
  border: none;
  border-radius: 5px 0 0 5px;
  
  &:hover {
   background-color: #247307;
   cursor: pointer;
  }
  
  &:focus {
    outline: none;
  }
  
  &:disabled {
    color: black;
    background-color: #247307;
  }
`;

const PlusButton = styled(Button)`
  margin-left: -20px;
  border-radius: 0 5px 5px 0;
`;

const Output = styled.output`
  color: black;
  text-align: left;
  width: 70px;
  margin-right: 0px;
  margin-left: 20px;
  font-size: 32px;
`;

const Task_Break = ({taskTime, breakTime, taskModify, breakModify, ifRunning}) => {

  const subtractTask = () => (taskTime > 1) ? taskModify(-1) : taskModify(0);
  const addTask = () => (taskTime < 99) ? taskModify(1) : taskModify(0);

  const subtractBreak = () => (breakTime > 1) ? breakModify(-1) : breakModify(0);
  const addBreak = () => (breakTime < 99) ? breakModify(1) : breakModify(0);

  return(
    <Div>
        <P>Task</P>
      <Control>
        <Button disabled={ifRunning} onClick={subtractTask}>-</Button>
        <Output>{taskTime}</Output>
        <PlusButton disabled={ifRunning} onClick={addTask}>+</PlusButton>
      </Control>
        <P>Break</P>
      <Control>
        <Button disabled={ifRunning} onClick={subtractBreak}>-</Button>
        <Output>{breakTime}</Output>
        <PlusButton disabled={ifRunning} onClick={addBreak}>+</PlusButton>
      </Control>
    </Div>
  );
};

export default Task_Break;
