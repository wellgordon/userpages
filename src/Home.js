import { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'


const HomeWrapper = styled.div`
    height: 100vh;
    width: 50vw;
    display: flex;
    align-items: center;
    flex-flow: column;
`
const HeaderDiv = styled.div`
    position: relative;
    left: 50%;
    display: flex;
    flex-flow: column;
    align-items: center;
`

const ContentWrapper = styled.div`
    position: relative;
    left: 50%;
    top: 10%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`

const Nav = styled.button`
    button-style: none;
    cursor: pointer;
    font-size: 100%;
    border: 0;
    font-weight: bold;
    
    &:hover {
        color: purple;
    }
`

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`

// const fadeOut = keyframes`
//     100% { 
//         opacity: 1;
//     }

//     0% { 
//         opacity: 0;
//     }
// `

const Fader = styled.h2`
    text-align: center;

    @keyframes {
        animation: 1s ${fadeIn} ease-out;
    }

   
`



function HomeUI({ content, setCount, count }) {

            
                setInterval(() => {
                    setCount(count + 1)                   
                }, 5000);
            
                
             
        

    return (
        <>
            <HomeWrapper>
                <HeaderDiv>
                    <h1>Welcome!!</h1>   
                </HeaderDiv>
                <ContentWrapper>
                    <Fader>{content[count]}</Fader>
                </ContentWrapper> 
            </HomeWrapper>
            
        </>
    )
}


function Home({ setPage }) {

    const content = [
        'This is a demonstration on the potential for unique profile pages in React',
        'To get started, we will first use a randomuser generator, provided by https://randomuser.io, to find some user profiles',
        'Then, each mini profile will provide a link to a dedicated page for that user',
        'Feel free to pull as many users as you like from the api',
        'Ready to get started?',
        <Nav onClick={handleClick}>Let's Find Some Users</Nav>,
    ]

    const [count, setCount] = useState(0)

    function handleClick() {
        setPage('MainUserPage')
    }

    return (
        <>
            <HomeUI setCount={setCount} count={count} content={content} />
            
        </>
    )
}

export default Home