import { colors } from "@/assets/styles/constants"
import { formatPrice } from "@/utilities/currency"
import React from "react"
import styled from "styled-components"
import { props } from "./types/Card"

function Card({ agent, onClick }:props) {
    function handleClick(e:React.MouseEvent<HTMLDivElement, MouseEvent>){
        onClick && onClick(e)
    }

    return (
    <Container onClick={handleClick}>
        <img src="https://www.carlosjimenez.info/wp-content/uploads//2013/10/person.jpg" alt="card image" />
        <span className="title-2">{agent.name}</span>
        <span>ID: {agent.id}</span>
        <span>Income: &nbsp;<b>${formatPrice(agent.income)}</b></span>
    </Container>
    )
}

export default Card

//#region styles 
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    min-width: 18rem;
    max-width: 18rem;
    min-height: 19.25rem;

    box-shadow: 0px 8px 16px rgba(29, 35, 58, 0.1);
    border-radius: 12px;

    transition: all 0.5s ease;
    img{
        width: 7rem;
        height: 7rem;
        border-radius: 50%;

        margin-top: 32px;
    }
    .title-2{
        margin-top: 32px;
        margin-bottom: 8px;
    }
    span:nth-child(2){
        font-size: 1rem;
        line-height: 1.15rem;

        color: ${colors.texts.paragraph};
    }
    span:last-child{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: auto;

        border-radius: 0 0 12px 12px;
        min-width: 100%;
        min-height: 4.188rem;

        font-size: 0.875rem;
        line-height: 1rem;

        color: ${colors.texts.paragraph};
        background-color: rgba(29, 35, 58, 0.1);
    }
`
//#endregion