import React from "react";
import { Carousel } from 'primereact/carousel';
import styled from "styled-components";
import NextButton from "../icons/NextButton";
import PrevButton from "../icons/PrevButton";
import { useMediaQuery } from "react-responsive";
import { clients } from "../data/Content";


const ClientsCarousel = () => {

    const isMobile = useMediaQuery({ query: "(max-width: 520px)" });
    const isTablet = useMediaQuery({ query: "(max-width: 768px)" });

    const clientTemplate = (client) => {
        return (
            <LogoContainer>
                <Logo src={client.src}></Logo>
            </LogoContainer>
        )
    }

    return (
        <Carousel
            value={clients}
            numVisible={isMobile ? 1 : isTablet ? 2 : 5}
            numScroll={1}
            circular
            autoplayInterval={3000}
            itemTemplate={clientTemplate}
            style={{ margin: "5px 30px 5px 30px" }}
            nextIcon={NextButton}
            prevIcon={PrevButton}
        />
    )
}

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 15px 15px 15px;
    padding: 15px;
`

const Logo = styled.img`
    height: 40px;
`

export default ClientsCarousel;