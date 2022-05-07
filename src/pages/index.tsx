import styled from 'styled-components'
import { Input, Navbar } from "@/components"
import { group, currency } from 'icons'
import Button from '@/components/Button'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { breakPoints } from 'styles/constants'

function Index() {
    const navigate = useNavigate()
    const [inputValue, setInputValue]: [number | null, Function] = useState(null)
    const [error, setError]: [string, Function] = useState('')

    function setValue(e: React.FormEvent<HTMLInputElement>) {
        setInputValue(Number(e.currentTarget.value))
    }
    function search() {
        setError('')
        if (inputValue?.toString().length !== 5) return setError('The income must have 5 digits')
        navigate('/results?income=' + inputValue)
    }

    return (
        <Container>
            <Navbar />
            <div className='content'>
                <img src={group} alt='group icon' />
                <span className='title'>Find the best agent for you</span>
                <span className='subtitle'>Fill the information below to get your matches.</span>
                <div className='search-section'>
                    <span className='paragraph'>Current income</span>
                    <Input icon={currency} type='number' onChange={setValue} error={error} />
                    <Button className='search-button' onClick={search}>
                        <span>Get matches</span>
                        <i className="fa-solid fa-arrow-right"></i>
                    </Button>
                </div>
            </div>
        </Container>
    )
}

export default Index

//#region styles
const Container = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
max-width: 100vw;
overflow: hidden;
text-align: center;

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    box-sizing: border-box;
    padding: 32px;
    
    animation-name: appear;
    animation-delay: 0.5s;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    .title{
        margin-bottom: 16px;
    }
    img[alt='group icon']{
        width: 5.625rem;
        height: 3.938rem;
        margin-bottom: 24.5px;
    }
    .search-section{
        display: flex;
        flex-direction: column;
        margin-top: 56px;
        width: 20rem;
        .paragraph{
            margin-bottom: 9px;
            text-align: start;
        }
    }
    .search-button{
        margin-top: 40px;
        margin-left: auto;
    }
}

@media screen and (max-width: ${breakPoints.phone}) {
    .search-button {
        min-width: 100%;
        span{
            margin-left: auto;
        }
        i{
            margin-left: auto;
        }
    }
}

@keyframes appear {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
`
//#endregion