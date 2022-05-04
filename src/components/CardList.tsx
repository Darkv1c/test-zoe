import styled from 'styled-components'
import Card from './Card'
import { IAttributes } from './types/CardList'

function CardList({fields, list, imgProperty, className}:IAttributes) {

    function getCardFieldsList(element:{[key: string]: string}) { 
        let response: typeof fields = {}
    
        for (const prop in fields){
            response[prop] = element[fields[prop]]
        }
    
        return response
    }
    function getImgUrl(element:{[key: string]: string}, propertyName:string):string{
        return element[propertyName]
    }

    return <Container className={className}>
        {list.map((e, n) => <Card key={'card-'+n} fields={getCardFieldsList(e)} image={getImgUrl(e, imgProperty)}/> )}
    </Container>
}

export default CardList

//#region styles
 const Container = styled.div`
    display: flex;
    flex-direction: row !important;
    flex-wrap: wrap;
    width: 100%;
    box-sizing: border-box;
    overflow-y: scroll;
    justify-content: center;
 `
//#endregion