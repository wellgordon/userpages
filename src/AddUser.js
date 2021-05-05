import { useState } from 'react'
import styled from 'styled-components'

const Form = styled.form`
    display: flex;
    flex-flow: column;
    align-items: center;
`

const Label = styled.label`
    font-weight: bold;
    color: gray;
`

const Input = styled.input`
    border: 1px solid gray;
    border-radius: 5px;
    box-shadow: 1px 1px 2px gray;
`

const FormSection = styled.section`
    ${({ isHidden }) => isHidden && `
        opacity: 1;
    `}

    ${({ isHidden }) => !isHidden && `
        opacity: 0;
    `}
`

const FormSection2 = styled.section`
    ${({ isHidden }) => isHidden && `
    opacity: 0;
    `}

    ${({ isHidden }) => !isHidden && `
    opacity: 1;
    `}
`

export default function AddUser() {

    const formQuestions = [
        'First Name:',
        'Last Name:',
        'Title:',
    ]

    const [isHidden, setIsHidden] = useState(true)
    const [user, setUser] = useState({})

    function handleInput(e) {
        setUser({...user, question: `${e.target.innerText}`})
        if(e.target.innerText === 'Title:'){
            setIsHidden(false)
        } 
    }

    function handleSubmit() {
        //save pic to user object
        
        
    }

    return (
        <Form>
            {formQuestions.map(question => {
                return (
                    <FormSection>
                        <Label for={question}>{question}</Label>
                        <Input id={question} type='text' onSubmit={handleInput} />
                    </FormSection>
                )
            })} 
            <FormSection2 className={isHidden}>
                <Label for='image'>Upload an Image</Label>
                <Input type='image' id='image' accept='/image/*' onSubmit={handleSubmit}/>
            </FormSection2>
        </Form>
    )
}