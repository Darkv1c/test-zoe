import styled from "styled-components";
import { colors } from './constants'

export default styled.div`
    font-family: Helvetica;
    .title{        
        font-size: 2rem;
        font-weight: 700;
        line-height: 126%;
        letter-spacing: -0.01em;

        color: rgb(${colors.texts.header});
    }
    .subtitle{
        font-weight: 400;
        font-size: 1rem;
        line-height: 126%;

        display: flex;
        letter-spacing: -0.01em;

        color: ${colors.texts.header};
    }
    .paragraph{
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1rem;

        color: rgb(${colors.texts.paragraph}); 
    }
`