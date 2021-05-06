import { useState } from 'react'
import axios from 'axios'
import UserInfo from './UserInfo'
import styled from 'styled-components'

//Below begin styled-components


const UsersWrapper = styled.div`
    height: 100vh;
    width: auto;
    display: block;
    margin: 0 auto;
`

const Container = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
`

const UsersDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`

const User = styled.section`
    flex-basis: 25%;
    box-shadow: 2px 2px 35px 10px rgba(153, 153, 153, .3);
    margin: .5rem .5rem;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    &:hover {
        cursor: pointer;
    }

`

const Button = styled.button`
    font-size: 100%;
    font-weight: bold;
    border: 0;
    margin-bottom: 2rem;
    background-color: white;
    cursor: pointer;

    &:hover {
        color: purple;
    }
`

//End styled-components


//Ui Components

function UserUi({user, setUserPage, setUserKey}) {
    
    function handleClick() {
        setUserPage('UserInfo')
        setUserKey(user.name.first)
    }

    return (
        <>
            <User onClick={handleClick}>
                <h1>{user.name.first}</h1>
                <img src={user.picture.large} alt='user'></img>
            </User>
           
        </>
    )
}

//Logic Components

function Users({setUserPage, setUserKey}) {
    const [users, setUsers] = useState([])
    const [count, setCount] = useState(0)

    function handleClick() {
        if(count > 5) {
            return
        } else {
            axios.get('https://randomuser.me/api').then((res) => {
                setUsers([...users, {key: res.data.results[0].name.first, user: res.data.results[0]}])
                localStorage.setItem(`${res.data.results[0].name.first}`, JSON.stringify(res.data.results[0]))
            })
            setCount(count + 1)

        }
        
    }
    
    return (
        <>
                <UsersWrapper>
                    <Container>
                        <Button onClick={handleClick}>Add Another User!</Button>
                        <UsersDiv>
                            
                            {users.map((user) => {
                                return <UserUi key={user.key} user={user.user} setUserPage={setUserPage} setUserKey={setUserKey} />
                            })}
                        </UsersDiv>
                    </Container>
                    
                </UsersWrapper>   
        </>
    )
}

//Main export component
function MainUserPage() {

    const [userPage, setUserPage] = useState('Users')
    const [userKey, setUserKey] = useState('')
    
    return (
        <>
            {userPage === 'Users' && <Users setUserPage={setUserPage} setUserKey={setUserKey}/>}
            {userPage === 'UserInfo' && <UserInfo userKey={userKey} setUserPage={setUserPage}/>}
        </>
    )
}


export default MainUserPage