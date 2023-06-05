import styled from "styled-components";
import Logo from '../components/Logo';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from "react";
import axios from "axios";
import userContext from '../context/UserContext';
import { ThreeDots } from 'react-loader-spinner';

export default function HomePage() {
  const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { userData, setUserData } = useContext(userContext);
  const [isLoading, setIsLoading] = useState(false); 

  function receiveData() {
    const data = { email: email, password: password };

    setIsLoading(true); 

    axios.post(url, data)
      .then(response => {
        const responseData = response.data;
        console.log(responseData);
        localStorage.setItem('user', JSON.stringify({
          token: responseData.token,
          image: responseData.image,
          name: responseData.name,
        }));
        setUserData(responseData);
        console.log(responseData);
        navigate('/hoje');
      })
      .catch(error =>{
        console.log(error.response.data);
        alert('Usuário ou senha errado!');
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <Container>
      <Logo />
      <Email
        data-test="email-input"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading} 
      />
      <Password
        data-test="password-input"
        placeholder="senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={isLoading} 
        type="password"
      />
      <Button
        data-test="login-btn"
        onClick={receiveData}
        disabled={isLoading} 
      >
        {isLoading ? ( 
          <ThreeDots
            type="ThreeDots"
            height={80}
            width={80}
            radius={9}
            color="white"
            background-color="#52B6FF"

            ariaLabel="three-dots-loading"
          />
        ) : (
          <h1>Entrar</h1>
        )}
      </Button>
      <Link data-test="signup-link" to="/cadastro">
        <SignUp>Não tem uma conta? Cadastre-se!</SignUp>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #52b6ff;
  border-radius: 4.63636px;
  color: white;
  border: none;
  width: 303px;
  height: 45px;
  h1 {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
  }
`;

const Email = styled.input`
  box-sizing: border-box;
  width: 303px;
  height: 45px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin-bottom: 6px;
  margin-top: 0px;
  ::placeholder {
    color: #dbdbdb;
    padding: 11px;
  }
`;

const SignUp = styled.h1`
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 13.976px;
  line-height: 17px;
  text-align: center;
  text-decoration-line: underline;
  color: #52b6ff;
  margin-top: 25px;
`;

const Password = styled(Email)``;
