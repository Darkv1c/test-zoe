import { colors } from "@/assets/styles/constants"
import styled from "styled-components"
import { props } from "./types/Button"

function Button({ onClick, children, className }: props) {
    return (
        <Component onClick={onClick} className={className}>
            {children}
        </Component>
    )
}

export default Button

//#region styles
const Component = styled.div`
    display: flex;
    justify-content: center;
    
    box-sizing: border-box;
    padding: 15px 14px;
    max-width: fit-content;

    color: rgb(${colors.white});
    background-color: rgb(${colors.interaction.blue03});
    
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.125rem;

    cursor: pointer;
    transition: all .5s ease;
    &:hover{
        background-color: rgb(${colors.interaction.blue03}, .8);
    }
    &:active{
        background-color: rgb(${colors.interaction.blue03});
    }
    i, img {
        margin-left: 15px;
    }
`
//#endregion