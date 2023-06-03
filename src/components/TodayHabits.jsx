import styled from 'styled-components';

export default function TodayHabits() {
  return (
    <Content>
        <Name>Nome do Habito</Name>
        <h1>Sequencia atual</h1>
        <h1>Seu record: </h1>
        <Button></Button>
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
  margin-top: 20px;
  background: #FFFFFF;
  border-radius: 5px;
`;

const Name = styled.h1`
  width: 303px;
  height: 45px;
  margin-top: 8px;
  background: #FFFFFF;
`;

const Button = styled.button`
    width: 69px;
    height: 69px;
    background: #EBEBEB;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
`;

