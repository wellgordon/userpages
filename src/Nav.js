import styled from 'styled-components'

const NavContainer = styled.div`
    margin-bottom: 1rem;
    width: 50vw;
`
const NavList = styled.ul`
    position: relative;
    left: 50%;
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
`

export const NavButton = styled.li`
    font-weight: bold;
    cursor: pointer;
    $:hover {
        color: purple;
        
    }
`


export default function Nav({setPage}) {

    function handleClick(e) {
        e.target.innerText === 'Home' ? setPage('Home') : setPage('About')
    }

    return (
       <NavContainer>
        <NavList>
            <NavButton onClick={handleClick}>
                Home
            </NavButton>
            <NavButton onClick={handleClick}>
                About
            </NavButton>    
        </NavList>
       </NavContainer>
    )
}
