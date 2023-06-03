import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import MyHabits from '../components/MyHabits';
import NewHabit from '../components/NewHabit';
import { useContext, useState, useEffect } from 'react';
import userContext from '../context/UserContext';
import axios from "axios";

export default function Habits() {
  const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
  const [habits, setHabits] = useState([]);
  const { userData } = useContext(userContext);
  const { token } = userData;

  useEffect(() => {
    axios
      .get(url, { headers: { 'Authorization': `Bearer ${token}` } })
      .then(response => {
        const responseData = response.data;
        console.log(responseData);
        setHabits(responseData); // Atualiza o estado com os hábitos recebidos da API
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
        } else {
          console.log(error.message);
        }
      });
  }, []);

  const daysOfWeek = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

  return (
    <Container>
      <Header />
      <MyHabits />
      <Content>
        {habits.length === 0 ? (
          <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
        ) : (
          habits.map((habit) => (
            <HabitWrapper key={habit.id}>
              <HabitName>{habit.name}</HabitName>
              <HabitDays>
                {daysOfWeek.map((day, index) => (
                  <HabitDay
                    key={index}
                    className={habit.days.includes(index + 1) ? 'active' : ''}
                  >
                    {day}
                  </HabitDay>
                ))}
              </HabitDays>
            </HabitWrapper>
          ))
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
  background: #E5E5E5;
  overflow: hidden;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
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
  height: 91px;
  background: #FFFFFF;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const HabitName = styled.div`
  /* Estilos adicionais para o nome do hábito, se necessário */
`;

const HabitDays = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const HabitDay = styled.div`
  width: 30px;
  height: 30px;
  background: #FFFFFF;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  margin-right: 5px;

  &.active {
    background: blue;
    color: #FFFFFF;
  }
`;
