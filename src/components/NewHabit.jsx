import styled from 'styled-components';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import userContext from '../context/UserContext';
import axios from "axios";


export default function NewHabit(props) {
    const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
    const [habit, setHabit] = useState('');
    const [days, setDays] = useState([]);
    const {userData} = useContext(userContext);
    const {token} = userData;
  
    function Weekdays(day) {
        if (days.includes(day)) {
            let newDays = days.filter(item => item !== day);
            setDays(newDays);
        }
        if (!days.includes(day)) {
            setDays([...days, day]);
        }
    }

    function cancelCreation(){
        props.setShowNewHabit(false);
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
                window.location.reload();
            })
            .catch(error => {
                if (error.response) {
                    console.log(error.response.data);
                } else {
                    console.log(error.message);
                }
            });

            props.setShowNewHabit(false);

    }

    return (
        <Content data-test="habit-create-container">
            <Input data-test="habit-name-input" placeholder="Nome do Habito" value={habit} onChange={(e) => setHabit(e.target.value)}></Input>
            <ButtonContainer>
                <Button data-test="habit-day" onClick={() => Weekdays(6)} style={{ background: days.includes(6) ? '#FFFFFF' : '#CFCFCF', color: days.includes(6) ? '#CFCFCF' : '#FFFFFF',}}>D</Button>
                <Button data-test="habit-day" onClick={() => Weekdays(0)} style={{ background: days.includes(0) ? '#FFFFFF' : '#CFCFCF', color: days.includes(0) ? '#CFCFCF' : '#FFFFFF', }}>S</Button>
                <Button data-test="habit-day" onClick={() => Weekdays(1)} style={{ background: days.includes(1) ? '#FFFFFF' : '#CFCFCF', color: days.includes(1) ? '#CFCFCF' : '#FFFFFF', }}>T</Button>
                <Button data-test="habit-day" onClick={() => Weekdays(2)} style={{ background: days.includes(2) ? '#FFFFFF' : '#CFCFCF', color: days.includes(2) ? '#CFCFCF' : '#FFFFFF', }}>Q</Button>
                <Button data-test="habit-day" onClick={() => Weekdays(3)} style={{ background: days.includes(3) ? '#FFFFFF' : '#CFCFCF', color: days.includes(3) ? '#CFCFCF' : '#FFFFFF', }}>Q</Button>
                <Button data-test="habit-day" onClick={() => Weekdays(4)} style={{ background: days.includes(4) ? '#FFFFFF' : '#CFCFCF', color: days.includes(4) ? '#CFCFCF' : '#FFFFFF', }}>S</Button>
                <Button data-test="habit-day" onClick={() => Weekdays(5)} style={{ background: days.includes(5) ? '#FFFFFF' : '#CFCFCF', color: days.includes(5) ? '#CFCFCF' : '#FFFFFF', }}>S</Button>
            </ButtonContainer>
            <SaveContainer>
                <Cancel data-test="habit-create-cancel-btn" onClick={() => cancelCreation()}>Cancelar</Cancel>
                <Save data-test="habit-create-save-btn" onClick={() => sendData()}>Salvar</Save>
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
  margin-bottom: 10px;
  background: #FFFFFF;
  border-radius: 5px;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 303px;
  height: 45px;
  margin-top: 18px;
  background: #FFFFFF;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  margin-bottom:10px;
`;

const Button = styled.button`
    width: 30px;
    height: 40px;
    border: 1px solid #D5D5D5;
    color: #D4D4D4;
    border-radius: 5px;
    margin-right: 5px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 5px;
`;

const SaveContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 303px;
    height: 45px;
    margin-top: 20px;
    margin-bottom: 15px;
`
const Save = styled.button`
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    margin-left: 23px;
`
const Cancel = styled.button`
    width: 69px;
    height: 20px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #52B6FF;
    background-color: white;
`