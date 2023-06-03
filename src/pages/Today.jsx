import React, { useState, useEffect, useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import userContext from '../context/UserContext';
import axios from 'axios';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import PercentageContext from "../context/PercentageContext";

export default function Today() {
  const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';
  const [habits, setHabits] = useState([]);
  const { userData } = useContext(userContext);
  const { percentage, setPercentage } = useContext(PercentageContext);
  const { token } = userData;

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(url, config)
      .then((response) => {
        setHabits(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleHabitClick = (habitId, done) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const endpoint = done
      ? `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}/uncheck`
      : `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}/check`;

    axios
      .post(endpoint, {}, config)
      .then((response) => {
        const updatedHabits = habits.map((habit) => {
          if (habit.id === habitId) {
            return {
              ...habit,
              done: !done,
            };
          }
          return habit;
        });
        setHabits(updatedHabits);
        const countDone = updatedHabits.filter(habit => habit.done).length;
        const newPercentage = ((countDone / updatedHabits.length) * 100).toFixed(1);
        setPercentage(newPercentage);
        localStorage.setItem('percentage', JSON.stringify(newPercentage));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Header />
      <Day data-test="today">{dayjs().locale('pt-br').format('dddd, D MMMM')}</Day>
      <h1 data-test="today-counter">{percentage}% concluídos hoje</h1>
      <Content>
        {habits.length === 0 ? (
          <Text data-test="today-counter">Nenhum hábito concluído ainda</Text>
        ) : (
          <>
            {habits.map((habit) => (
              <HabitWrapper data-test="today-habit-container" key={habit.id}>
                <HabitName data-test="today-habit-name">{habit.name}</HabitName>
                <HabitDetails>
                  <HabitDetail data-test="today-habit-sequence">{habit.currentSequence} dias</HabitDetail>
                  <HabitDetail data-test="today-habit-record">{habit.highestSequence} recorde</HabitDetail>
                </HabitDetails>
                <HabitButton data-test="today-habit-check-btn" done={habit.done} onClick={() => handleHabitClick(habit.id, habit.done)}>
                  {habit.done ? 'Check' : 'N check'}
                </HabitButton>
              </HabitWrapper>
            ))}
          </>
        )}
      </Content>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 1;
  background: #e5e5e5;
  overflow-x: hidden;
`;

const Day = styled.h1`
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 22.976px;
  line-height: 29px;
  margin-top: 150px;
  color: #126ba5;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.h1`
  width: 338px;
  height: 74px;
  margin-top: 28px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  color: #666666;
`;

const HabitWrapper = styled.div`
  width: 340px;
  height: 94px;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
`;

const HabitName = styled.div`
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #666666;
`;

const HabitDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HabitDetail = styled.span`
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #666666;
`;

const HabitButton = styled.button`
  width: 84px;
  height: 35px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => (props.done ? '#8FC549' : '#D5D5D5')};
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  cursor: pointer;
`;
