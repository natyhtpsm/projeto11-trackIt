import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';

export default function History(){
    return(
        <Container>
            <Header/>
            <Content>
                <Title>Histórico</Title>
                <Text>Em breve você poderá ver o histórico dos seus hábitos aqui!</Text>
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
const Title=styled.h1`
    width: 100px;
    height: 29px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
    margin-left: 17px;
    margin-top: 28px;

`
const Content = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 70px;
`
const Text = styled.h1`
    width: 338px;
    height: 74px;
    margin-top: 18px;
    margin-left: 18px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
`