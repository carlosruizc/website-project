import React from "react";
import { Carousel } from 'primereact/carousel';
import styled from "styled-components";
import NextButton from "../icons/NextButton";
import PrevButton from "../icons/PrevButton";
import { useMediaQuery } from "react-responsive";

const clients = [
    {
        item: "0",
        src: "/images/clients/allianz-logo.svg"
    },
    {
        item: "1",
        src: "/images/clients/agilence-logo-blk.webp"
    },
    {
        item: "2",
        src: "/images/clients/cbi-health-logo-blk.webp"
    },
    {
        item: "3",
        src: "/images/clients/everlywell-logo.webp"
    },
    {
        item: "4",
        src: "/images/clients/hughes-logo-blk.webp"
    },
    {
        item: "5",
        src: "/images/clients/impact-logo-blk.webp"
    },
    {
        item: "6",
        src: "/images/clients/mantech-logo-blk.webp"
    },
    {
        item: "7",
        src: "/images/clients/noy-logo.webp"
    },
    {
        item: "8",
        src: "/images/clients/veem-logo-blk.webp"
    },
    {
        item: "9",
        src: "/images/clients/venafi-logo-blk.webp"
    },
]

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