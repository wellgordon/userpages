import styled from 'styled-components'

const AboutContainer = styled.div`
    height: 100vh;
    width: 50%;
    display: block;
    margin: 0 auto 10rem auto;
`

const AboutBody = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
`

const Header = styled.h1`
    margin-bottom: 2rem;
    margin-top: 2rem;
`

const Paragraph = styled.p`
    font-size: 1.2rem;
    color: gray;
    margin-bottom: 1rem;
`

export default function About() {

    const aboutContent = [
        'This began as a simple project to practice working with web apis using the third-party axios library. However, as I began to work out the details, I realized that there were constantly additional features I wanted to add - a way to add multiple users to the page, a way to see more about an individual user, contional styling to bring a unique touch toeach individual users page, and a way to maintain the users on the Home page after navigating to a unique user page (a feature that is forthcoming). I also realized that this was an opportunity to utilize the local storage method to simulate working with a backend api. Each user object, after being pulled from the https://randomuser.io api, is simultaneously stored in its entirety in the component state, as well as in a new JSON stringified object on local storage. When you click on a user, the new component that is rendered pulls its data from local storage using a unique key generated when the user is pulled from the web api.',

        'In its final form, I hope this serves as a worthwhile demonstration on the power of React to create dynamically rendered profile pages for individual users - company employees, team members, or any other group of people you may want to highlight on a website.'
    ]

    return (
        <AboutContainer>
            <AboutBody>
                <Header>
                    About This Project
                </Header>
                {aboutContent.map(p => {
                    return <Paragraph>{p}</Paragraph>
                })}
            </AboutBody>
        </AboutContainer>
    )
}