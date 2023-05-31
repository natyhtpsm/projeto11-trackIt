import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';

export default function Habits(){
    return(
        <Container>
            <Header/>
            <Content>
                
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
`

const Content = styled.div`

`
