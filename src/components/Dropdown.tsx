import { useState } from "react"
import styled from "styled-components"
import { containerProps, props } from "./types/Dropdown"

function Dropdown ({ label, options, onChange }:props) {

    const [isOpen, setIsOpen] = useState(false)
    const [selectLabel, setSelectLabel] = useState('select...')
    
    function handleChange(option: typeof options[0]){
        setSelectLabel(option.label)
        onChange()
    }

    return (
        <Container isOpen={isOpen} onScroll={() => setIsOpen(false)}>
            {isOpen ? <div className="backdrop" onClick={() => setIsOpen(false)}/> : undefined}
            <span className="label">{label}</span>
            <span className='select' onClick={() => setIsOpen(!isOpen)}>
                {selectLabel}
                <i className="fa-solid fa-chevron-down"></i>
                <div className="options" >
                    {options.map((option, n) => <span key={'option' + n} onClick={() => handleChange(option)}>{option.label}</span>)}
                </div>
            </span>
        </Container>
    )
}

export default Dropdown

//#region Styles
    const Container = styled.span<containerProps>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
        .backdrop {
            position: fixed;
            min-width: 100vw;
            min-height: 100vh;
            top: 0;
            left: 0;
        }
        .label, .select{
            font-size: 0.875rem;
            line-height: 1rem;
            margin-bottom: 9px;
            color: rgba(95, 95, 95, 1)
        }
        .select {
            position: relative;

            display: flex;
            justify-content: space-between;
            width: 13.75rem;
            height: 2.875rem;

            box-sizing: border-box;
            padding: 15px 20px;

            border: 1px solid rgba(220, 220, 220, 1);
            border-radius: 4px;
            
            color: ${props => props.isOpen && '#8B8B8B !important'};
            
            cursor: pointer;
            i{
                width: 0.75rem;
                height: 0.438rem;

                color: rgba(139, 139, 139, 1);

                transform: ${props => props.isOpen ? 'rotateZ(180deg)' : ''};
                transition: all 0.2s ease;
            }
            .options{
                position: absolute;
                top: 0;
                left: 0;

                display: flex;
                flex-direction: column;
                align-items: flex-start;
                
                padding-top: 2.875rem;                
                border: 1px solid rgba(220, 220, 220, 1);
                border-radius: 4px;
                box-shadow: ${props => props.isOpen && '0px 8px 16px rgba(29, 35, 58, 0.1)'};
                width: 100%;

                transform: ${props => props.isOpen ? 'scaleY(100%)' : 'scaleY(0)'};
                transform-origin: 0 0;
                transition: all 0.2s ease;

                span{
                    box-sizing: border-box;
                    padding: 15px 20px;
                    width: 100%;

                    :hover{
                        background-color: #5C7BEB;
                        color: white;
                    }
                }
            }
        }
    `
//#endregion