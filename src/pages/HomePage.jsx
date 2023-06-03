import styled from "styled-components";
import Logo from '../components/Logo';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";

export default function HomePage(){
    const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    function receiveData(){
        const data = {
            email: email,
            password: password
        };

        const promise = axios.post(url, data);
        promise.then(response => {
            const responseData = response.data;
            console.log(responseData);
            navigate('/habitos');
        });
        promise.catch(erro => console.log(erro.response.data));
    }

    return(
        <Container>
            <Logo/>
            <Email data-test="email-input" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Password data-test="password-input" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <Button data-test="login-btn" onClick={receiveData}>
                <h1>Entrar</h1>
            </Button>
            <Link data-test="signup-link" to='/cadastro'>
                <SignUp>Não tem uma conta? Cadastre-se!</SignUp>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #52B6FF;
    border-radius: 4.63636px;
    color: white;
    border: none;
    width: 303px;
    height: 45px;
    h1{
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
    ::placeholder {
        color: #DBDBDB;
        padding: 11px;
    }
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
    margin-top: 25px;
`
const Password = styled(Email)``