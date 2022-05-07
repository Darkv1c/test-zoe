import { Navbar } from "@/components"
import { getAgents } from "actions/agents"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import styled from "styled-components"
import { agent } from "./types/results"

function Results() {
    const [searchParams] = useSearchParams()
    const [agents, setAgents]:[agent[] | [], Function] = useState([])

    useEffect(() => {  
        getAgents('./agent-list.json', (data:agent[]) => setAgents(data))
    }, [])

    return (
        <Container>
            <Navbar/>
            <div className="content">
                <span className="title">Your matches</span>
                <span className="subtitle 2">Your income: &nbsp;<b>${searchParams.get('income')}</b></span>
            </div>
        </Container>
    )
}

export default Results

//#region styles 
const Container = styled.div`
    .content{
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 32px;
        text-align: center;
        .subtitle{
            margin: auto;
            margin-top: 12px;
            font-size: 1.25rem;
        }
    }
    
`
//#endregion