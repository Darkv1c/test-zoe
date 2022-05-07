import { Navbar } from "@/components"
import Dropdown from "@/components/DropDown"
import { props } from "@/components/types/Dropdown"
import { formatPrice } from "@/utilities/currency"
import { getAgents } from "actions/agents"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import styled from "styled-components"
import { agent } from "./types/results"

function Results() {
    const [searchParams] = useSearchParams()
    const [agents, setAgents]:[agent[] | [], Function] = useState([])
    const orderOptions = [
        {label: 'Name (A-Z)', value: 0},
        {label: 'ID', value: 1},
        {label: 'Income: High first', value: 2},
        {label: 'Income: Low first', value: 3},
    ]

    useEffect(() => {  
        getAgents('./agent-list.json', (data:agent[]) => setAgents(data))
    }, [])

    function price(price:string){
        return formatPrice(Number(price))
    }

    return (
        <Container>
            <Navbar/>
            <div className="content">
                <span className="title">Your matches</span>
                <span className="subtitle 2">Your income: &nbsp;<b>${price(searchParams.get('income') || '')}</b></span>
                <div className="filters">
                    <Dropdown label="Order agents by" options={orderOptions} />
                </div>
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
    .filters {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 32px;
    }
    
`
//#endregion