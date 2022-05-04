import { useEffect, useState } from "react"
import { getAgents } from 'actions/agents'
import styled from 'styled-components'
import { IAgent } from './types'

function Index() {  
    const [agents, setAgents]:[IAgent[], Function] = useState([])
    const [results, setResults]:[IAgent[], Function] = useState([])
    const [inputValue, setInputValue]:[number | null, Function] = useState(null)
    const [message, setMessage]:[string, Function] = useState('')    
    const [page, setPage]:[number, Function] = useState(1)    
    const range:number = 10000


    function setInput(e:any){
        setInputValue(e.target.value)
    }
    function search(){
        let res = []
        setMessage('')
        if (inputValue?.toString().length !== 5) return setMessage('please enter a 5 digits income')
        res = agents.filter(agent => (agent.income < Number(inputValue) + range) && (agent.income > Number(inputValue) - range))
        setResults(res)
    }

    function seeLess(){
        if (page > 1) setPage(page - 1)
    }
    function seeMore(){
        if (page < agents.length / 3) setPage(page + 1)
    }
    
    useEffect(() => {         
        getAgents('./agent-list.json', function(data:IAgent[]){
            setAgents(data)
        });
     }, [])

    return <Container>
        <input type="number" onChange={setInput}></input>
        <span onClick={search}>MATCH</span>
        <span>{message}</span>
        <ul>
            {results.map((elem, n) => {
                if (n < page * 3){
                    return <li key={'income' + n}>{elem.income}</li>
                } 
            })}
        </ul>
        <span onClick={seeMore}>see more  </span><br></br>
        <span onClick={seeLess}> see less </span>
    </Container>
}

export default Index

//#region styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
`
//#endregion