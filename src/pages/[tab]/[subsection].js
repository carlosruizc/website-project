import * as React from "react"
import Layout from "../../components/layout"
import Header from "../../sections/Header"
import Footer from "../../sections/Footer"
import styled from "styled-components"
import pages from "../../data/pages.json"
import { useLocation } from "@reach/router"
import NotFoundPage from "../404"
import InsightsCarousel from "../../components/InsightsCarousel"
import Button from "../../components/Button"
import VideoSection from "../../sections/VideoSection"
import ClientsCarousel from "../../components/ClientsCarousel"
import QuoteSection from "../../sections/QuoteSection"
import CardsSection from "../../sections/CardsSection"


const SubSectionPage = () => {
    const location = useLocation()
    const pathname = location.pathname
    const pathParts = pathname.split("/");
    const lastPathPart = pathParts[pathParts.length - 2]

    const page = pages.find(page => encodeURIComponent(page.title) === lastPathPart)

    if (!page) {
        return (
            <Layout>
                <Header isIndex={false} />
                <NotFoundPage />
                <Footer />
            </Layout>
        )
    }

    return (
        <Layout>
            <Header isIndex={false} />
            <TopBannerContainer>
                <GradientText>{page.title}</GradientText>
                <SubTitle>{page.subtitle}</SubTitle>
                {page.firstline && <p>{page.firstline}</p>}
                {page.text && <p>{page.text}</p>}
                {page.buttons &&
                    <ButtonContainer>
                        {page.buttons.map(button => <Button variant="primary" key={button}>{button}</Button>)}
                    </ButtonContainer>}
            </TopBannerContainer>
            {page.videosection &&
                <VideoSectionContainer>
                    <VideoSection title={page.videosection.title} URL={page.videosection.videoURL} text={page.videosection.text} />
                </VideoSectionContainer>
            }
            {page.clientscarousel && <ClientsCarousel />}
            {page.quotessection && <QuoteSection quote={page.quotessection}></QuoteSection>}
            {page.cardssection && <CardsSection cards={page.cardssection}></CardsSection>}

            <InsightsCarousel />
            <Footer />
        </Layout>
    )
}

const TopBannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100px 70px 100px 100px;
`

const GradientText = styled.p`
    font-size: 7.81vw;
    background: linear-gradient(90deg, #102b51, #0169f9); 
    -webkit-background-clip: text;
    color: transparent;
    text-align: left;
    padding: 0;
    margin: 0;
    font-weight: 900;
    word-wrap: break-word;
`

const SubTitle = styled.p`
    font-size: 50px;
    padding:0;
    margin:0;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 35%;
    justify-content: space-between;
`

const VideoSectionContainer = styled.div`
    display: flex;
    height: 450px;
    justify-content: center;
    background-color: white;
`

export default SubSectionPage
