import React from "react";
import styled from "styled-components";
import {mobile} from "../responsive";
import {
  Facebook,
  Instagram,
  Twitter,
  Pinterest,
  Room,
  Phone,
  MailOutline,
} from "@material-ui/icons";

const Container = styled.div`
  display: flex;
  ${mobile({
    flexDirection:"column"
  })}
`;

// Left Section starts
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 15px 0px;
  ${mobile({
    fontSize:"17px"
})}

`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
`;
//Left Section Ends

//Center Section Starts
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    display:"none"
  })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItems = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
//Center Section Starts

//Right Section Starts
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    backgroundColor:"#fff8f8"
  })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;

//Right Section Ends

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Trends.com</Logo>
        <Desc>
          Trends.com is the ultimate destination for fashion and lifestyle,
          being host to a wide array of merchandise including clothing,
          footwear, accessories, jewellery, personal care products and more.Our
          online store brings you the latest in designer products straight out
          of fashion houses. You can shop online at Trends.com from the comfort
          of your home and get your favourites delivered right to your doorstep.
        </Desc>
        <SocialContainer>
          <SocialIcon color="385999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItems>Home</ListItems>
          <ListItems>Cart</ListItems>
          <ListItems>Man Fashion</ListItems>
          <ListItems>Women Fashion</ListItems>
          <ListItems>Accessories</ListItems>
          <ListItems>My Account</ListItems>
          <ListItems>Order Tracking</ListItems>
          <ListItems>Wishlist</ListItems>
          <ListItems>Terms</ListItems>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          602 Alaska Path, South Bengaluru 560103, India
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +91 99-88-556452
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          abcd_1234@gmail.com
        </ContactItem>
        <Payment src="https://www.pngmart.com/files/7/Payment-Background-PNG.png"></Payment>
      </Right>
    </Container>
  );
};

export default Footer;
