import styled from 'styled-components';

export default function TodayHabits() {
  return (
    <Content>
        <Name>Nome do Habito</Name>
      <ButtonContainer>
        <Button>D</Button>
        <Button>S</Button>
        <Button>T</Button>
        <Button>Q</Button>
        <Button>Q</Button>
        <Button>S</Button>
        <Button>S</Button>
      </ButtonContainer>
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
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  background: #FFFFFF;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  margin-left: 4px;
  color: black;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 303px;
  height: 45px;
`;
