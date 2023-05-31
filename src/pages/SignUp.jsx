import styled from 'styled-components';
import Logo from '../components/Logo';

export default function SignUp(){

    return(
        <Container>
            <Logo/>
            <Email placeholder="email"/>
            <Password placeholder="senha"/>
            <Name placeholder="nome"/>
            <Picture placeholder="foto"/>
            <Button>
                <h1>Cadastrar</h1>
            </Button>
            <Login>Já tem conta? Faça login!</Login>
        </Container>
        
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Email = styled.input`
    box-sizing: border-box;
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom: 6px;
    ::placeholder {
        color: #DBDBDB;
        padding: 11px;
    }
`
const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 4.63636px;
    color: white;
    border: none;
    h1{
        width: 64px;
        height: 26px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;
    }
`
const Login = styled.h1`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
    margin-top: 25px;
`
const Password = styled(Email)``
const Name = styled(Email)``
const Picture = styled(Email)``
