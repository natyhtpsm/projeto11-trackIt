import styled from 'styled-components';

export default function TodayHabits(){

    return(
        <Container>
            <Content>
                <Text></Text>
            </Content>
        </Container>
    );
    
    

}
    
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background: #E5E5E5;
    overflow: hidden;
`
const Content = styled.div`
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
`
const Text = styled.h1`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
`