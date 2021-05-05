import styled from 'styled-components'

const Wrapper = styled.div`
    height: 100vh;
    width: 50vw;
    display: flex;
    justify-content: center;
    margin-top: 5rem;
`

const User = styled.div`
    position: relative;
    left: 50%;
    height: 400px;
    display: flex;
    flex-flow: row nowrap; 
    background-color: gray;
    border-radius: 5px;
    box-shadow: 5px 5px 5px black;
    padding: 1rem;
`

const Img = styled.img`
    height: 350px;
    margin-right: 2rem;
`

const UserText = styled.section`
    display: flex;
    flex-flow: column;
    margin-left: 2rem;
`



function UserInfo({userKey}) {
    
    const JSONKEY = localStorage.getItem(userKey)
    const user = JSON.parse(JSONKEY)
    
   
    return (
        <>
        <Wrapper>
            <User>
                <Img src={user.picture.large} alt={`${user.name.first}`}></Img>
                <UserText>
                    <h1>{user.name.first} {user.name.last}</h1>
                    <h3>Age: {user.dob.age}</h3>
                    <h3>Country: {user.location.country}</h3>
                    <address>
                        <a href={`mailto:${user.email}`}>
                            {user.email}
                        </a>
                    </address>
                </UserText>
                
            </User>
        </Wrapper>
            
        </>
    )
}



export default UserInfo