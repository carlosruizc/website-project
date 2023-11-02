import React from 'react';
import styled from 'styled-components';

const VideoSection =({title, URL, text})=>{
    return (
        <VideoContainer>                     
                <DemoText>
                    <SubTitle style={{width:"40%"}}><strong>{title}</strong></SubTitle>
                    <p style={{width:"60%"}}>{text}</p>                
                </DemoText>        
            <Iframe src={URL} />                
        </VideoContainer>
    )
}

const VideoContainer=styled.div`
    display: flex;
    flex-direction: row;
    padding: 100px;
    align-items: center;
    justify-content: center;
`

const Iframe=styled.iframe`
    height: 250px;
    width: 450px;
    border-radius:20px;
`

const DemoText=styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
`

const SubTitle=styled.p`
    font-size: 20px;
`

export default VideoSection;