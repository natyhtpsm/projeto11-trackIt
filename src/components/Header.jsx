import styled from "styled-components";
import { useContext } from "react";
import userContext from "../context/UserContext";

export default function Header(){
    const {userData} = useContext(userContext);
    const {image} = userData;
    return(
      
        <Container data-test="header">
            <Text>TrackIt</Text>
            <Picture data-test="avatar" src={image}/>
        </Container>

    );

}

const Container = styled.div`
    position: fixed;
    display: flex;
    align-itens: center;
    justify-content: center;
    flex-direction: row;
    text-align: center;
    width: 100%;
    height: 70px;
    left: 0px;
    top: 0px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`
const Text = styled.h1`
    display: flex;
    align-itens: center;
    justify-content: center;
    margin-left: 18px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: auto;
    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;
`
const Picture = styled.img`
    display: flex;
    align-itens: center;
    justify-content: center;
    margin-right: 18px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: auto;
    width: 51px;
    height: 51px;  
    border-radius: 98.5px;
`
