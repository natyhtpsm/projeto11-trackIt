import styled from 'styled-components';

export default function NewHabit() {
  return (
    <Content>
      <Input></Input>
      <ButtonContainer>
        <Button>D</Button>
        <Button>S</Button>
        <Button>T</Button>
        <Button>Q</Button>
        <Button>Q</Button>
        <Button>S</Button>
        <Button>S</Button>
      </ButtonContainer>
      <SaveContainer>
        <Save>Salvar</Save>
        <Cancel>Cancelar</Cancel>
      </SaveContainer>
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

const Input = styled.input`
  box-sizing: border-box;
  width: 303px;
  height: 45px;
  margin-top: 8px;
  background: #FFFFFF;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
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

const SaveContainer =styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 303px;
    height: 45px;
`
const Save = styled.button`
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
`
const Cancel = styled.button`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #52B6FF;
`