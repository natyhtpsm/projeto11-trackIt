import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import MyHabits from '../components/MyHabits';
import { useContext, useState, useEffect } from 'react';
import userContext from '../context/UserContext';
import axios from 'axios';
import Exclude from '../assets/trash.png';
import NewHabit from '../components/NewHabit';

export default function Habits() {
  const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
  const [habits, setHabits] = useState([]);
  const { userData } = useContext(userContext);
  const { token } = userData;
  const [showNewHabit, setShowNewHabit] = useState(false);

  useEffect(() => {
    axios
      .get(url, { headers: { 'Authorization': `Bearer ${token}` } })
      .then(response => {
        const responseData = response.data;
        console.log(responseData);
        setHabits(responseData);
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
        } else {
          console.log(error.message);
        }
      });
  }, []);

  const daysOfWeek = ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'];

  const deleteHabit = (habitId) => {
    axios
      .delete(`${url}/${habitId}`, { headers: { 'Authorization': `Bearer ${token}` } })
      .then(response => {
        console.log('Habit deleted successfully');
        const updatedHabits = habits.filter(habit => habit.id !== habitId);
        setHabits(updatedHabits);
      })
      .catch(error => {
        console.log('Error deleting habit:', error);
      });
  };

  return (
    <Container>
      <Header />
      <DivMyHabits>
        <MyHabits setShowNewHabit={setShowNewHabit} />
      </DivMyHabits>
      <DivContent>
        <Content>
          {showNewHabit && <NewHabit setShowNewHabit={setShowNewHabit} />}
          {habits.length === 0 ? (
            <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
          ) : (

            habits.map((habit) => (
              <HabitWrapper data-test="habit-container" key={habit.id}>
                <HabitName data-test="habit-name">{habit.name}</HabitName>
                <HabitDays>
                  {daysOfWeek.map((day, index) => (
                    <HabitDay data-test="habit-day"
                      key={index}
                      className={habit.days.includes(index) ? 'active' : ''}
                    >
                      {day}
                    </HabitDay>
                  ))}
                </HabitDays>
                <DeleteButton data-test="habit-delete-btn" onClick={() => deleteHabit(habit.id)} src={Exclude} alt="Excluir Hábito" />
              </HabitWrapper>
            ))
          )}
        </Content>
      </DivContent>
      <Footer />
    </Container>
  );
}

const DivMyHabits = styled.div`
  display: flex;
  align-itens: center;
  flex-direction: column;
`
const DivContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-itens: center;
  justify-content: center;
  flex-direction: column;
`

const Container = styled.div`
  height: 100%;
  width: 100%;
  background: #E5E5E5;
  overflow-x: hidden;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 70px;
  margin-left: 15px;
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

const DeleteButton = styled.img`
  position: absolute;
  cursor: pointer;
`;
