import styled from 'styled-components'


const Foot = styled.footer`
    position: relative;
    bottom: 0%;
    left: 12.5%;
    width: 75%;
`

const FooterList = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
`

const FooterItem = styled.li`
    font-weight: bold;
    font-size: 1rem;
`

export default function Footer() {

    const footerItems = [
        'About This Site',
        'Contact',
        'Attributions'
    ]

    return (
        <Foot>
            <FooterList>
                {footerItems.map(item => {
                    return <FooterItem>{item}</FooterItem>
                })}
            </FooterList>
        </Foot>
    )
}