import React from "react";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";
import {mobile} from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({
    padding:"10px"
})}

`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};

  ${mobile({
    margin:"0px 10px",
})}

`;

const TopTexts = styled.div`
${mobile({
  display:"none"
})}

`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection:"column"
})}

`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection:"column"
})}

`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Detail = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: 0.5px solid lightgray;
`;
const ProductSize = styled.span``;
const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ProductAmount = styled.div`
  display: flex;
  align-items: center;
  margin-bottom:20px;
`;
const ProductPrice = styled.div`
    font-size:30px;
    font-weight:200;
`;
const Amount = styled.div`
    font-size:24px;
    margin:5px;
`;

const Hr = styled.hr`
    background-color:#eee;
    border:none;
    height:1px;
`;
const Summary = styled.div`
  flex: 1;
  border:0.5px solid lightgray;
  border-radius:10px;
  padding:20px;
  height:50vh;
`;
const SummaryTitle = styled.h1`
    font-weight:200;
`;
const SummaryItem = styled.div`
    margin: 30px 0px;
    display:flex;
    justify-content:space-between;
    font-weight: ${props=>props.type === "Total" && "500"};
    font-size: ${props=>props.type === "Total" && "24px"};
`;
const SummaryItemPrice = styled.span``;
const SummaryItemText = styled.span``;
const SummaryButton = styled.button`
    width:100%;
    padding:10px;
    background-color:black;
    color:white;
    font-weight:600;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">BUY NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://semaine.com/wp-content/uploads/2021/06/KengoShoes.png" />
                <Detail>
                  <ProductName>
                    <b>Product :</b>ASICS SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID :</b>93813718293
                  </ProductId>
                  <ProductColor color="#fff"/>
                  <ProductSize>
                    <b>Size :</b>37.5
                  </ProductSize>
                </Detail>
              </ProductDetail>
              <PriceDetails>
                <ProductAmount>
                  <Add />
                  <Amount>1</Amount>
                  <Remove />
                </ProductAmount>
                <ProductPrice>$ 40</ProductPrice>
              </PriceDetails>
            </Product>
            <Hr/>
            <Product>
              <ProductDetail>
                <Image src="https://rukminim1.flixcart.com/image/332/398/klphn680/kids-t-shirt/f/x/q/15-16-years-abkpergfu23510-allen-solly-original-imagyrzrdvgzewqr.jpeg?q=50" />
                <Detail>
                  <ProductName>
                    <b>Product :</b>ALLEN SOLLY T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID :</b>93813718354
                  </ProductId>
                  <ProductColor color="#000033" />
                  <ProductSize>
                    <b>Size :</b>37.5
                  </ProductSize>
                </Detail>
              </ProductDetail>
              <PriceDetails>
                <ProductAmount>
                  <Add />
                  <Amount>2</Amount>
                  <Remove />
                </ProductAmount>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetails>
            </Product>
          </Info>
          <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>SubTotal</SummaryItemText>
                    <SummaryItemPrice>$70</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>$ 5</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice>$ -5</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="Total">
                    <SummaryItemText >Total</SummaryItemText>
                    <SummaryItemPrice>$ 70</SummaryItemPrice>
                </SummaryItem>
                <SummaryButton>BUY NOW</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
