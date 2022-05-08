import { breakPoints, colors } from "@/assets/styles/constants"
import { Navbar, Dropdown, Card } from "@/components"
import Button from "@/components/Button"
import { formatPrice } from "@/utilities/currency"
import { getAgents } from "actions/agents"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Navigate, useNavigate } from 'react-router'
import styled from "styled-components"
import { agent } from "../types/results"

function Results() {
    const [searchParams] = useSearchParams()
    const [agents, setAgents]: [agent[] | [], Function] = useState([])
    const [hiddenAgents, setHiddenAgents]: [agent[] | [], Function] = useState([])
    const [page, setPage]: [number, Function] = useState(0)
    const navigate = useNavigate()
    const [nameAZ, id, incomeAscending, incomeDescending ] = [0, 1, 2, 3]
    const income = Number(searchParams.get('income'))
    const range = 10000
    const orderOptions = [
        { label: 'Name (A-Z)', value: nameAZ },
        { label: 'ID', value: id },
        { label: 'Income: High first', value: incomeAscending },
        { label: 'Income: Low first', value: incomeDescending},
    ]

    useEffect(() => {
        getAgents('./agent-list.json', (data: agent[]) => 
            setAgents(data.filter((agent:agent) => agent.income < income + range && agent.income > income - range))
        )
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
    function changePage(operator:number){
        if (operator > 0 && page + operator < Math.ceil(agents.length / 3)) return setPage(page + operator)
        if (operator < 0 && page + operator >= 0) return setPage(page + operator)
    }

    return (
        <Container page={page} lastPage={Math.trunc(agents.length / 3)}>
            <Navbar />
            {agents.length ? <div className="content">
                <span className="title">Your matches</span>
                <span className="subtitle 2">Your income: &nbsp;<b>${price(income.toString() || '')}</b></span>
                <div className="filters">
                    <Dropdown label="Order agents by" options={orderOptions} onChange={handleChange} />
                </div>
                <div className="card-list">
                    {agents.map((agent, n) => 
                    n < (page + 1) *3 ? <Card key={'agent-' + n} agent={agent} onClick={(e) => handleClick(e, agent)} /> : undefined
                    )}
                </div>
                <div className="buttons">
                    <span onClick={() => changePage(-1)}>Show less -</span>
                    <span onClick={() => changePage(1)}>Show more +</span>
                </div>
            </div> :
            <div className="no-results">
                <span className="title">Sorry, no results found</span>
                <span className="subtitle 2">Your income: &nbsp;<b>${price(income.toString() || '')}</b></span>
                <Button className='search-button' onClick={() => navigate('/')}>
                        <i className="fa-solid fa-arrow-left"></i>
                        <span>Search again</span>
                </Button>
            </div>
            }
        </Container>
    )
}

export default Results

//#region styles 
const Container = styled.div<{page: number, lastPage: number}>`
    .content, .no-results{
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
    .buttons{
        display: flex;
        justify-content: flex-end;

        margin-top: 46px;
        
        span:first-child{
            margin-right: 38px;

            color: ${props => props.page !== 0 ? `rgb(${colors.interaction.blue03})` : `rgb(${colors.texts.disbled})`};
            
            cursor: pointer;
        }
        span:nth-child(2){
            color: ${props => props.page < props.lastPage ? `rgb(${colors.interaction.blue03})`: `rgb(${colors.texts.disbled})`};

            cursor: pointer;
        }
    }
    .search-button{
        margin: auto;
        margin-top: 16px;
        i {
            margin: 0;
            margin-right: 16px;
        }
        span {
            margin-right: 16px;
        }
    }

    @media screen and (width: ${breakPoints.phone}){
        .buttons{
            justify-content: space-between;
        }
    }
`
//#endregion