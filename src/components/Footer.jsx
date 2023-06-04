import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";
import { useContext } from "react";
import PercentageContext from "../context/PercentageContext";

export default function Footer(){
    const { percentage } = useContext(PercentageContext);
    return(
        <Container data-test="menu">
            <Link data-test="habit-link" to='/habitos' style={{ textDecoration: 'none' }}>
                <Habits>Hábitos</Habits>
            </Link>
            <Link data-test="today-link" to='/hoje' style={{ textDecoration: 'none' }}>
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
            </Link>
            <Link data-test="history-link" to='/historico' style={{ textDecoration: 'none' }}>
                <History>Histórico</History>
            </Link>
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
    margin-bottom: 31px;
    width: 91px;
    height: 91px;

`
const Habits = styled.h1`
    width: 68px;
    height: 22px;

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

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
`
