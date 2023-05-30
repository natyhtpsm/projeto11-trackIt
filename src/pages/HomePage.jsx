import styled from "styled-components";
import Logo from '../components/Logo'

export default function HomePage(){

    return(
        <Container>
            <Logo/>
            <Login>
                <Email placeholder="email">
                </Email>
                <Password placeholder="senha"></Password>
                <Button>
                    <h1>Entrar</h1>
                </Button>
            </Login>
            <SignUp>Não tem uma conta? Cadastre-se!</SignUp>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: pink;
`
const Login = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;
    height: 148px;
    width: 304px;
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
const Email = styled.input`
    box-sizing: border-box;
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom: 6px;
`
const Password = styled.input`
    box-sizing: border-box;
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom: 6px;
`
const SignUp = styled.h1`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
`