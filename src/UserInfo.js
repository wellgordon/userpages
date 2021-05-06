import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
    height: 100vh;
    width: 50vw;
    display: block;
    margin: 0 auto;
`

const Container = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
`

const BackContainer = styled.div`
    margin-bottom: 1rem;

    &:hover {
        cursor: pointer;
    }
`

const User = styled.div`
    height: 400px;
    display: flex;
    flex-flow: row nowrap; 
    border-radius: 5px;
    box-shadow: 2px 2px 35px 10px rgba(153, 153, 153, .3);
    padding: 1rem;
    background-color: white;
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



function UserInfo({userKey, setUserPage}) {
    
    const JSONKEY = localStorage.getItem(userKey)
    const user = JSON.parse(JSONKEY)
    
   
    return (
        <>
        <Wrapper>
            <Container>
                <BackContainer onClick={() => {setUserPage('Users')}}>
                    <FontAwesomeIcon icon={faLongArrowAltLeft} size='3x' />
                </BackContainer>
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
            </Container>
            
        </Wrapper>
            
        </>
    )
}



export default UserInfo