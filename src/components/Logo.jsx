import styled from "styled-components";
import Image from "../assets/logo.png.png";

export default function Logo(){
    return(
        <>
            <LogoImage src={Image}/>
        </>

    );
}
const LogoImage = styled.img`
    width: 180px;
    height: 178.38px;
    margin-top: 68px;
    margin-bottom: 32.62px;
`
