import React from "react";
import { Carousel } from 'primereact/carousel';
import styled from "styled-components";
import NextButton from "../icons/NextButton";
import PrevButton from "../icons/PrevButton";
import { useMediaQuery } from "react-responsive";

const clients = [
    {
        item: "0",
        src: "/static/clients/allianz-logo.svg"
    },
    {
        item: "1",
        src: "/static/clients/BoubyanBank.svg"
    },
    {
        item: "2",
        src: "/static/clients/cdc.svg"
    },
    {
        item: "3",
        src: "/static/clients/cleveland-clinic.svg"
    },
    {
        item: "4",
        src: "/static/clients/Cognizant_Logo.svg"
    },
    {
        item: "5",
        src: "/static/clients/DefenseDigital.svg"
    },
    {
        item: "6",
        src: "/static/clients/DepartmentHealthHuman.svg"
    },
    {
        item: "7",
        src: "/static/clients/Dept-of-Transportation-Logo.svg"
    },
    {
        item: "8",
        src: "/static/clients/DISA.svg"
    },
    {
        item: "9",
        src: "/static/clients/Eastman_Chemical_Company_logo.svg"
    },
    {
        item: "10",
        src: "/static/clients/everlywell-logo.webp"
    },
    {
        item: "11",
        src: "/static/clients/FannieMae.svg"
    },
    {
        item: "12",
        src: "/static/clients/freshfields-logo.svg"
    },
    {
        item: "13",
        src: "/static/clients/GSA.svg"
    },
    {
        item: "14",
        src: "/static/clients/InternalRevenueService.svg"
    },
    {
        item: "15",
        src: "/static/clients/noy-logo.webp"
    },
    {
        item: "16",
        src: "/static/clients/StateofColorado.svg"
    },
    {
        item: "17",
        src: "/static/clients/SynSaber-Logo-Stacked-DBlue.svg"
    },
    {
        item: "18",
        src: "/static/clients/UnitedStatesAirForcе.svg"
    },
    {
        item: "19",
        src: "/static/clients/UnitedStatesArmy.svg"
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