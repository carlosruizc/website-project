import React from "react";
import { Carousel } from 'primereact/carousel';
import styled from "styled-components";
import MenuArrow from "../icons/MenuArrow";
import Button from "./Button";
import NextButton from "../icons/NextButton";
import PrevButton from "../icons/PrevButton";
import { useMediaQuery } from "react-responsive";
import { blogs } from "../data/Content";


const InsightsCarousel = () => {

    const isTablet = useMediaQuery({ query: "(max-width:768px)" })

    const blogTemplate = (blogItem) => {
        return (
            <BlogContainer>
                <img src={blogItem.src} style={{ borderRadius: "20px" }} alt={blogItem.item} />
                <div style={{ margin: "20px" }}>
                    <SubTitle >{blogItem.item}</SubTitle>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Button variant="gray" >BLOG</Button>
                        <MenuArrow color="grey" />
                    </div>

                </div>

            </BlogContainer>
        )
    }
    if (!isTablet) {
        return (
            <InsightsContainer>
                <div style={{ display: "flex", width: "800px", marginRight: "auto", marginLeft: "auto" }}>
                    <Carousel
                        value={blogs}
                        numVisible={isTablet ? 1 : 2}
                        numScroll={1}
                        circular
                        autoplayInterval={4000}
                        itemTemplate={blogTemplate}
                        nextIcon={NextButton}
                        prevIcon={PrevButton}
                        style={{ width: "100%" }}
                    />
                </div>
            </InsightsContainer>
        )
    } else {
        return (
            <BlogContainer>
                <img src={blogs[0].src} style={{ borderRadius: "20px" }} alt={blogs[0].item} />
                <div style={{ margin: "20px" }}>
                    <SubTitle >{blogs[0].item}</SubTitle>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Button variant="gray" >BLOG</Button>
                        <MenuArrow color="grey" />
                    </div>

                </div>

            </BlogContainer>
        )
    }
}

const InsightsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 40px 40px 150px;
    background-color: white;
`

const BlogContainer = styled.div`
    display: flex;
    width: 300px;
    flex-direction: column;
    border-radius: 20px;
    margin: 20px;
    background-color: #f7f7f7;
`

const SubTitle = styled.p`
    font-size: 20px;
`

export default InsightsCarousel;