import React from 'react';
import { Send } from '@material-ui/icons';
import styled from 'styled-components';
import {mobile} from "../responsive";


const Container = styled.div`
    height : 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content : center;
    flex-direction: column;
`;
const Title = styled.h1`
    font-weight:bold;
    font-size:70px;
    ${mobile({
        fontSize:"40px"
    })}
    

`;
const Description = styled.div`
    color: black;
    font-size:24px;
    font-weight: 300;
    margin-bottom : 20px;
    ${mobile({
        textAlign:"center",
        fontSize:"15px"
    })}
`;
const InputContainer = styled.div`
    // padding:10px;
    width:50%;
    height : 40px;
    background-color: white;
    display: flex;
    justify-content : space-between;
    border:1px solid lightgray;
    ${mobile({
        width:"80%"
    })}
`;
const Input = styled.input`
    padding:20px;
    border:none;
    flex:8;
`;
const Button = styled.button`
    border: none;
    flex:1;
    cursor:pointer;
    background-color:teal;
    color:white;
`;

const Newsletter = () => {
    return (
        <Container>
            <Title>NewsLetter</Title>
            <Description>Get Timely Updates your favorite products</Description>
            <InputContainer>
                <Input placeholder="Your Email"/>
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
    )
}


export default Newsletter;