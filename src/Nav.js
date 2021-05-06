import styled from 'styled-components'

const NavContainer = styled.div`
    display: block;
    margin: 0 auto;
    
`
const NavList = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
`

export const NavButton = styled.li`
    font-weight: bold;
    cursor: pointer;
    $:hover {
        color: purple;
        
    }
`


export default function Nav({setPage}) {

    return (
       <NavContainer>
        <NavList>
            <NavButton onClick={() => {setPage('Home')}}>
                Home
            </NavButton>
            <NavButton onClick={() => {setPage('MainUserPage')}}>
                Users
            </NavButton>
            <NavButton onClick={() => {setPage('About')}}>
                About
            </NavButton>    
        </NavList>
       </NavContainer>
    )
}
