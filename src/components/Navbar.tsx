import styled from "styled-components"
import Logo from "images/logo.png"

function Navbar() {
    return <Container>
        <img src={Logo} alt="Logo" />
    </Container>
}

export default Navbar

//#region style
const Container = styled.div`
    position: sticky;

    display: flex;
    align-items: center;
    height: 5rem;
    padding-left: 30px;

    background-color: #FAFAFA;

    img[alt='Logo']{
        width: 5.473rem;
        height: 2.613rem;
    }
`
//#endregion