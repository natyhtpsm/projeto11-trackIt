import styled from 'styled-components';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import userContext from '../context/UserContext';
import axios from "axios";


export default function NewHabit() {
    const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
    const [habit, setHabit] = useState('');
    const [days, setDays] = useState([]);
    const {userData} = useContext(userContext);
    const {token} = userData;
    console.log('USER DATA:', userData);
    const navigate = useNavigate();

    function Weekdays(day) {
        if (days.includes(day)) {
            let newDays = days.filter(item => item !== day);
            setDays(newDays);
        }
        if (!days.includes(day)) {
            setDays([...days, day]);
        }
    }

    function sendData() {

        const data = {
            name: habit,
            days: days
        };

        axios
            .post(url, data, {headers: {'Authorization': `Bearer ${token}`}})
            .then(response => {
                const responseData = response.data;
                console.log(responseData);
                navigate('/habitos');
            })
            .catch(error => {
                if (error.response) {
                    console.log(error.response.data);
                } else {
                    console.log(error.message);
                }
            });


    }

    return (
        <Content>
            <Input placeholder="Nome do Habito" value={habit} onChange={(e) => setHabit(e.target.value)}></Input>
            <ButtonContainer>
                <Button onClick={() => Weekdays('7')} style={{ background: days.includes('7') ? '#52B6FF' : '#CCCCCC' }}>D</Button>
                <Button onClick={() => Weekdays('1')} style={{ background: days.includes('1') ? '#52B6FF' : '#CCCCCC' }}>S</Button>
                <Button onClick={() => Weekdays('2')} style={{ background: days.includes('2') ? '#52B6FF' : '#CCCCCC' }}>T</Button>
                <Button onClick={() => Weekdays('3')} style={{ background: days.includes('3') ? '#52B6FF' : '#CCCCCC' }}>Q</Button>
                <Button onClick={() => Weekdays('4')} style={{ background: days.includes('4') ? '#52B6FF' : '#CCCCCC' }}>Q</Button>
                <Button onClick={() => Weekdays('5')} style={{ background: days.includes('5') ? '#52B6FF' : '#CCCCCC' }}>S</Button>
                <Button onClick={() => Weekdays('6')} style={{ background: days.includes('6') ? '#52B6FF' : '#CCCCCC' }}>S</Button>
            </ButtonContainer>
            <SaveContainer>
                <Save onClick={() => sendData()}>Salvar</Save>
                <Cancel>Cancelar</Cancel>
            </SaveContainer>
        </Content>
    );
}

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 340px;
  height: 180px;
  margin-top: 220px;
  background: #FFFFFF;
  border-radius: 5px;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 303px;
  height: 45px;
  margin-top: 8px;
  background: #FFFFFF;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
`;

const Button = styled.button`
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  background: #FFFFFF;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  margin-left: 4px;
  color: black;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 303px;
  height: 45px;
`;

const SaveContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 303px;
    height: 45px;
`
const Save = styled.button`
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
`
const Cancel = styled.button`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #52B6FF;
`