import styled from "styled-components"
import { props } from "./types/Input"

function Input({ icon, type, onChange, error }: props) {
    return (
        <Component>
            <div className="input">
                {icon && <img src={icon} alt="" />}
                <input type={type} onChange={onChange} />
            </div>
            <small>{error}</small>
        </Component>
    )

}

export default Input

//#region styles
const Component = styled.div<props>`
    text-align: left;
    .input{
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding: 14px 15px;
        height: 2.875rem;
    
        border: 1px solid #DCDCDC;
        border-radius: 4px;
    
        transition: all .5s ease;
        :focus-within{
            box-shadow: 0 0 10px 0 lightblue;
        }
        img{
            width: 10.13px;
            height: 18px;
            margin-right: 15px;
        }
        input{
            width: 100%;
            ${props => props.icon && 'padding-right: 18px'};
            
            font-size: 1.125rem;
            text-align: center;
    
            border: none;
            outline: none;
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        input[type=number] {
            -moz-appearance: textfield;
        }
    }
    small{
        color: red;
        margin-right: auto;
    }
`
//#endregion