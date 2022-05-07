import { Navbar, Dropdown, Card } from "@/components"
import { formatPrice } from "@/utilities/currency"
import { getAgents } from "actions/agents"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import styled from "styled-components"
import { agent } from "../types/results"

function Results() {
    const [searchParams] = useSearchParams()
    const [agents, setAgents]: [agent[] | [], Function] = useState([])
    const [hiddenAgents, setHiddenAgents]: [agent[] | [], Function] = useState([])
    const [nameAZ, id, incomeAscending, incomeDescending ] = [0, 1, 2, 3]
    const orderOptions = [
        { label: 'Name (A-Z)', value: nameAZ },
        { label: 'ID', value: id },
        { label: 'Income: High first', value: incomeAscending },
        { label: 'Income: Low first', value: incomeDescending},
    ]

    useEffect(() => {
        getAgents('./agent-list.json', (data: agent[]) => setAgents(data))
    }, [])

    function price(price: string) {
        return formatPrice(Number(price))
    }

    function handleChange(option: { label: string, value: string | number }) {
        if (option.value == nameAZ) setAgents([...agents].sort((a:agent, b:agent) => a.name > b.name ? 1 : -1))
        if (option.value == id) setAgents([...agents].sort((a:agent, b:agent) => a.id > b.id ? 1 : -1))
        if (option.value == incomeAscending) setAgents([...agents].sort((a:agent, b:agent) => a.income < b.income ? 1 : -1))
        if (option.value == incomeDescending) setAgents([...agents].sort((a:agent, b:agent) => a.income > b.income ? 1 : -1))
    }

    function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>, agent: agent) {
        const target = e.currentTarget 
        target.style.transform = 'scale(0)'
        setTimeout(() => {
            target.style.display = 'none'
        } , 400)
        setHiddenAgents([...hiddenAgents, agent])
    }

    return (
        <Container>
            <Navbar />
            <div className="content">
                <span className="title">Your matches</span>
                <span className="subtitle 2">Your income: &nbsp;<b>${price(searchParams.get('income') || '')}</b></span>
                <div className="filters">
                    <Dropdown label="Order agents by" options={orderOptions} onChange={handleChange} />
                </div>
                <div className="card-list">
                    {agents.map((agent, n) => <Card key={'agent-' + n} agent={agent} onClick={(e) => handleClick(e, agent)} />)}
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
        margin: auto;

        padding: 32px;
        max-width: 56rem;

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
    .card-list{
        display: flex;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;

        margin-top: 15px;        
    }
    
`
//#endregion