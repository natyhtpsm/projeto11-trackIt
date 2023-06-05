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
        console.log('antes sethabits', response);
        setHabits(response.data);
        console.log('depois sethabits: ', habits );

      })
      .catch((error) => {
        console.log(error);
      });

  }, []);
  console.log('depois use effect: ', habits );

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
        console.log('ANTES IF: ');
        const updatedHabits = habits.map((habit) => {
          if (habit.id === habitId) {
            return {
              ...habit,
              done: !done,
            };
          }
          return habit;
        });
        console.log('DEPOIS IF: ');

        setHabits(updatedHabits);
        const countDone = updatedHabits.filter(habit => habit.done).length;
        const newPercentage = ((countDone / updatedHabits.length) * 100).toFixed(1);
        setPercentage(newPercentage);
        localStorage.setItem('percentage', JSON.stringify(newPercentage));
        console.log('FINAL: ');

      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Header />
      <Day data-test="today">{dayjs().locale('pt-br').format('dddd, D MMMM')}</Day>
        {habits.every((habit) => habit.done === false) ? (
                    <Text data-test="today-counter">Nenhum hábito concluído ainda</Text>
                    ) : (
                    <PercentageContainer data-test="today-counter">{percentage}% concluídos hoje</PercentageContainer>
        )}
        <Content>
          <>
            {habits.map((habit) => (
              <HabitWrapper data-test="today-habit-container" key={habit.id}>
                <div>
                    <HabitName data-test="today-habit-name">{habit.name}</HabitName>
                    <HabitDetails>
                    <HabitDetail data-test="today-habit-sequence">Sequência atual: {habit.currentSequence}</HabitDetail>
                    <HabitDetail data-test="today-habit-record">Seu recorde: {habit.highestSequence}</HabitDetail>
                    </HabitDetails>
                </div>

                    <HabitButton data-test="today-habit-check-btn" done={habit.done} onClick={() => handleHabitClick(habit.id, habit.done)}>
                        ✓
                    </HabitButton>
          
              </HabitWrapper>
            ))}
          </>
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

const PercentageContainer=styled.h1`
    width: 238px;
    height: 22px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #8FC549;
    margin-left: 18px;
`

const Day = styled.h1`
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 22.976px;
  line-height: 29px;
  margin-top: 98px;
  margin-left: 18px;
  color: #126ba5;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
`;

const Text = styled.h1`
  margin-left: 18px;
  width: 338px;
  height: 22px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  color: #666666;
  margin-top: 18px;
`;

const HabitWrapper = styled.div`
  width: 340px;
  height: 94px;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const HabitName = styled.div`
    width: 208px;
    height: 25px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    margin-left: 15px;
    margin-top: 13px;
    margin-bottom: 10px;
`;

const HabitDetails = styled.div`
    width: 146px;
    height: 32px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
    display: flex;
    flex-direction: column;
    margin-left: 15px;
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
    width: 69px;
    height: 69px;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    background-color: ${(props) => (props.done ? '#8FC549' : '#EBEBEB')};
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 20px;
    color: #ffffff;
    cursor: pointer;
    margin-right: 13px;
    margin-top: 13px;
`;