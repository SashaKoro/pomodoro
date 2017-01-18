import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  color: black;
  background-color: #BD5417;
  width: 200px;
  height: 120px;
  margin: auto;
  border-radius: 20px 20px 20px 20px;
  font-size: 70px;
  text-align: center;
  line-height: 115px;
`;

const Display = ({displayOutput}) => {
  return(
    <Div>{displayOutput}</Div>
  );
};

export default Display;
