import React from 'react'
import styled from "styled-components"
import Logo from "images/logo.png"
import { useNavigate } from "react-router"
import { breakPoints } from "@/assets/styles/constants"

function Navbar() {
    const navigate = useNavigate()

    function goHome(){
        navigate('/')
    }

    return (
        <Container>
            <img src={Logo} alt="Logo" onClick={goHome}/>
        </Container>
    )
}

export default Navbar

//#region style
const Container = styled.div`
    position: sticky;
    top: 0;
    z-index: 100;

    display: flex;
    align-items: center;
    height: 5rem;
    padding-left: 30px;

    background-color: #FAFAFA;

    img[alt='Logo']{
        width: 5.473rem;
        height: 2.613rem;
        cursor: pointer;
    }
    
    @media screen and (width: ${breakPoints.phone}){
        height: 3rem;        
        img[alt='Logo']{
            width: 4.616rem;
            height: 2rem;
            cursor: pointer;
        }
    }
`
//#endregion