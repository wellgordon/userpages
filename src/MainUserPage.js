import { useState } from 'react'
import axios from 'axios'
import UserInfo from './UserInfo'
import styled from 'styled-components'


const UsersWrapper = styled.div`
    height: 100vw;
    width: 50vw;
    display: flex;
    flex-flow: column;
    align-items: center;
`

const UsersDiv = styled.div`
    position: relative;
    width: 100%;
    left: 50%;
    display: flex;
    flex-flow: row wrap;
`

const User = styled.section`
    flex-basis: 25%;
    box-shadow: 5px 5px 10px gray;
    margin: .5rem .5rem;

`

const ButtonContainer = styled.div`
    position: relative;
    left: 50%;
    display: flex;
    flex-flow: row;
    align-items: center;
`

const Button = styled.button`
    font-size: 100%;
    font-weight: bold;
    border: 0;
    background-color: white;
    cursor: pointer;

    &:hover {
        color: purple;
    }
`

function UserUi({user, setUserPage, setUserKey}) {
    
    function handleClick() {
        setUserPage('UserInfo')
        setUserKey(user.name.first)
    }

    return (
        <>
            <User>
                <h1 onClick={handleClick}>{user.name.first}</h1>
                <img src={user.picture.thumbnail} alt='user'></img>
            </User>
           
        </>
    )
}




function Users({setUserPage, setUserKey}) {
    const [users, setUsers] = useState([])
    

    function handleClick() {
        axios.get('https://randomuser.me/api').then((res) => {
            setUsers([...users, {key: res.data.results[0].name.first, user: res.data.results[0]}])
            localStorage.setItem(`${res.data.results[0].name.first}`, JSON.stringify(res.data.results[0]))
        })
    }
    
    return (
        <>
                <UsersWrapper>
                    <ButtonContainer>
                        <Button onClick={handleClick}>Add Another User!</Button>
                    </ButtonContainer>
                    
                    <UsersDiv>
                        
                        {users.map((user) => {
                            return <UserUi key={user.key} user={user.user} setUserPage={setUserPage} setUserKey={setUserKey} />
                        })}
                    </UsersDiv>
                </UsersWrapper>
        </>
    )
}

function MainUserPage() {

    const [userPage, setUserPage] = useState('Users')
    const [userKey, setUserKey] = useState('')
    
    return (
        <>
            {userPage === 'Users' && <Users setUserPage={setUserPage} setUserKey={setUserKey}/>}
            {userPage === 'UserInfo' && <UserInfo userKey={userKey}/>}
        </>
    )
}


export default MainUserPage