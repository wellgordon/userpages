import styled from 'styled-components'

const Wrapper = styled.div`
    height: 100vh;
    width: 50vw;
    display: flex;
    justify-content: center;
`

const User = styled.div`
    position: relative;
    left: 50%;
    display: flex;
    flex-flow: column nowrap;
    
    
    
`

function UserInfo({userKey}) {
    
    const JSONKEY = localStorage.getItem(userKey)
    const user = JSON.parse(JSONKEY)
    
   
    return (
        <>
        <Wrapper>
            <User>
                <h1>{user.name.first} {user.name.last}</h1>
                <img src={user.picture.large} alt={`${user.name.first}`}></img>
            </User>
        </Wrapper>
            
        </>
    )
}



export default UserInfo