import styled from 'styled-components';
import Logo from '../components/Logo';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';

export default function SignUp() {
  const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Estado para controlar a exibição da animação

  function sendData() {
    const data = {
      email: email,
      name: name,
      image: image,
      password: password
    };

    setIsSubmitting(true);
    setIsLoading(true); // Ativa a exibição da animação após o clique no botão de cadastro

    axios
      .post(url, data)
      .then(response => {
        const responseData = response.data;
        console.log(responseData);
        navigate('/');
      })
      .catch(error => {
        alert('Email já cadastrado!');
        if (error.response) {
          console.log(error.response.data);
        } else {
          console.log(error.message);
        }
      })
      .finally(() => {
        setIsLoading(false); // Desativa a exibição da animação após a conclusão do cadastro (com sucesso ou falha)
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
        disabled={isSubmitting}
      />
      <Password
        data-test="password-input"
        placeholder="senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={isSubmitting}
        type="password"
      />
      <Name
        data-test="user-name-input"
        placeholder="nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={isSubmitting}
      />
      <Picture
        data-test="user-image-input"
        placeholder="foto"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        disabled={isSubmitting}
      />
      <Button
        data-test="signup-btn"
        onClick={sendData}
        disabled={isSubmitting}
      >
        {isLoading ? ( // Exibe a animação se isLoading for true
          < ThreeDots
            type="ThreeDots"
            height={80}
            width={80}
            radius={9}
            color="#4fa94d"
            ariaLabel="three-dots-loading"
          />
        ) : (
          <h1>Cadastrar</h1>
        )}
      </Button>
      <Link data-test="login-link" to="/">
        <Login>Já tem conta? Faça login!</Login>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 303px;
  height: 45px;
  background: #52b6ff;
  border-radius: 4.63636px;
  color: white;
  border: none;
  h1 {
    width: 64px;
    height: 26px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
  }
`;
const Login = styled.h1`
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
const Name = styled(Email)``;
const Picture = styled(Email)``;
