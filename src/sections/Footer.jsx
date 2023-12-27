import React from "react"
import styled from "styled-components"
import Button from "../components/Button"
import { Link } from "gatsby"
import { footerContent } from "../data/Content"

const Footer = () => {

    return (
        <div>
            <FooterContainer>
                <Logo src="https://i.imgur.com/4uXmZhk.png" />
                <FooterColumns>
                    {footerContent.map(column => (
                        <Column key={column.title}>
                            <BlueText><strong>{column.title}</strong></BlueText>
                            {column.items.map(item => (
                                <WhiteText key={item} to="">{item}</WhiteText>
                            ))}
                            {column.button && (
                                <ButtonContainer>
                                    <Button variant="primary" onClick={() => window.open(column.URL)}>{column.button}</Button>
                                </ButtonContainer>
                            )}
                        </Column>
                    ))}
                </FooterColumns>
                <Button variant="white-blue">CONTACT US</Button>
                <BottomContainer>
                    <Copyright>Copyright © 2023 Synack. All rights reserved.</Copyright>
                    <BlueTextSmall to="">Privacy</BlueTextSmall>
                    <BlueTextSmall to="">Terms</BlueTextSmall>
                    <BlueTextSmall to="">Patent Info</BlueTextSmall>
                    <BlueTextSmall to="">Disclosure Policy</BlueTextSmall>
                    <BlueTextSmall to="">Security</BlueTextSmall>
                    <BlueTextSmall to="">Cookies</BlueTextSmall>
                    <BlueTextSmall to="">Modern Slavery Statement</BlueTextSmall>
                    <BlueTextSmall to="">My Privacy Choices</BlueTextSmall>
                </BottomContainer>
            </FooterContainer>
        </div>
    )

}

export default Footer

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    background: #11284e;
    color: white;
    position: relative;
    padding-left:100px;

    @media (max-width:768px) {
        padding-left: 20px;
    }
`

const Logo = styled.img`
    margin-left: 0;
    margin-right: auto;
    height:40px;
    padding: 50px 0 50px 0;
`

const FooterColumns = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 15px 0 15px;
    width: 150px;
    
`

const BlueText = styled.p`
    color: #007aff;
    font-size: 10px;
    letter-spacing:1px;
`

const WhiteText = styled(Link)`
    color: white;
    font-size: 10px;
    margin: 5px 0 5px 0;
    text-decoration: none;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0 30px 0;
`

const BottomContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 30px 30px 30px 0;
    flex-wrap: wrap;
    gap: 15px;
`

const Copyright = styled.p`
    font-size: 8px;
`
const BlueTextSmall = styled(Link)`
    color: #007aff;
    font-size: 8px;
    text-decoration:none;
`