import React from "react";
import { Carousel } from 'primereact/carousel';
import styled from "styled-components";
import MenuArrow from "../icons/MenuArrow";
import Button from "./Button";
import NextButton from "../icons/NextButton";
import PrevButton from "../icons/PrevButton";

const blogs = [
    {
        item:"How to Stay Secure Amid AI Mania",
        src:"/static/blogs/synack-blog-banner-repost-RH-ISAC-AI-1.webp"            
    },
    {
        item:"Securing at the Rate of Innovation: Investment in Control and Visibility of Testing Traffic ",
        src:"/static/blogs/synack-dev-teams-security-process-patching.webp"            
    },
    {
        item:"Empowering Your Developer Teams: How to Overcome “Us vs. Them” with Vulnerability Remediation",  
        src:"/static/blogs/synack-launchpoint-plus-blog-1.webp"          
    },
    {
        item:"You Are the Weakest Link: Securing the Human Element",
        src:"/static/blogs/synack-securing-layer8-blog-banner.webp"            
    },
    {
        item:"Why You Need a Vulnerability Disclosure Program (VDP)",  
        src:"/static/blogs/synack-Managed-VDP-blog-banner.jpg"                      
    },
]

const InsightsCarousel=() =>{

    const blogTemplate =(blogItem)=>{
        return (
            <BlogContainer>
                <img src={blogItem.src} style={{borderRadius:"20px"}} alt={blogItem.item}/>
                <div style={{margin:"20px"}}>
                    <SubTitle >{blogItem.item}</SubTitle> 
                    <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                        <Button variant="gray" >BLOG</Button>
                        <MenuArrow color="grey" />
                    </div>  
                    
                </div>
                
            </BlogContainer>
        )
    }
    return (
        <InsightsContainer>                
                <div style={{display:"flex", width:"800px", marginRight:"auto", marginLeft:"auto"}}>
                <Carousel 
                    value={blogs} 
                    numVisible={2} 
                    numScroll={1} 
                    circular 
                    autoplayInterval={4000} 
                    itemTemplate={blogTemplate} 
                    nextIcon={NextButton} 
                    prevIcon={PrevButton}
                    style={{width:"100%"}} 
                />
                </div>            
        </InsightsContainer>
    )
}

const InsightsContainer=styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 40px 40px 150px;
    background-color: white;
`

const BlogContainer=styled.div`
    display: flex;
    width: 300px;
    flex-direction: column;
    border-radius: 20px;
    margin: 20px;
    background-color: #f7f7f7;
`

const SubTitle=styled.p`
    font-size: 20px;
`

export default InsightsCarousel;