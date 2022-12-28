import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const H1 = styled.h1``

const Button = styled.button`
  outline: transparent solid 2px;
  transition-duration: .2s;
  color: #fff;
  border: #198754;
  font-size: 20px;
  background: #198754;
  padding: 10px 25px;
  cursor: pointer;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  border-radius: 5px;

  &:hover {
    color: #fff;
    background-color: #157347;
    border-color: #146c43;
  }

  &:active {
    padding: 8px 23px;
    animation-timing-function: ease-in;
    animation: .25s ease-out;
  }
`;

function App() {
  const [count, setCount] = useState(0);

  const totalClick = () => {
    console.log(setCount(count+1))
  }

  return (
      <Container>
      <H1>{count}</H1>
        <Button onClick={e => totalClick()}> { (count % 3 === 0 && count !== 0) ? "Bang" : "Click Me"} </Button>
      </Container>
  );
}

export default App;
