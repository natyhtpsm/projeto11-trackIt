import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import MyHabits from '../components/MyHabits';
import NewHabit from '../components/NewHabit';

export default function Habits(){
    return(
        <Container>
            <Header/>
            <MyHabits/>
            <NewHabit/>
            <Content>
                <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
            </Content>
            <Footer/>
       </Container>
    );

}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 1;
    background: #E5E5E5;
    overflow: hidden;
`

const Content = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
`
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
`