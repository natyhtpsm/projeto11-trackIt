import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Footer(){
    const percentage=66;
    return(
        <Container>
            <Habits>Hábitos</Habits>
            <DivBotão>
                    <CircularProgressbar
                value={percentage}
                text={`Hoje`}
                background
                backgroundPadding={6}
                styles={buildStyles({
                backgroundColor: "#3e98c7",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent"
                })}
            />
            </DivBotão>
            <History>Histórico</History>
        </Container>
    );
}

const Container = styled.div`
    position: fixed;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 70px;
    left: 0px;
    bottom: 0px;
`
const DivBotão = styled.div`
    position: absolute;
    margin-bottom: 10px;
    width: 91px;
    height: 91px;
    top: -31px;
`
const Habits = styled.h1`
    width: 68px;
    height: 22px;
    padding: 24px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
`

const History = styled.h1`
    width: 68px;
    height: 22px;
    padding: 24px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
`
