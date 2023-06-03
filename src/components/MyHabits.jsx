import styled from "styled-components";
import React, { useState } from 'react';


export default function MyHabits(props) {

  const handleAddHabit = () => {
    props.setShowNewHabit(true);
  };
  return (
    <Container>
      <Text>Meus Hábitos</Text>
      <Button onClick={handleAddHabit}>+</Button>
    </Container>
  );
}

const Container = styled.div`
    height: 35px;
    width: 100%;
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Button = styled.button`
    position: absolute;
    width: 40px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    right: 18px;
`
const Text = styled.h1`
    position: absolute;
    margin-left: 17px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
`
