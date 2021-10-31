import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import { Remove, Add } from "@material-ui/icons";
import {mobile} from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ 
    padding:"10px", flexDirection:"column"
  })}
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({
    height:"40vh"
  })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({
    padding:"10px"
  })}

`;
const Title = styled.h1`
  font-weight: 100;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({
    width:"100%"
  })}

`;

const Filter = styled.div`
    display:flex;
    align-items:center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight:200;
`;

const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color: ${props=>props.color};
    margin:0 5px;
    cursor:pointer;
`;

const FilterSize = styled.select`
    margin-left:10px;
    padding:5px;
    cursor:pointer;
`;

const FilterSizeOption = styled.option`
    cursor:pointer;
`;

const AmountContainer = styled.div`
   display:flex;
   align-items:center;
   font-weight:700;
`;
const Amount = styled.span`
    width:30px;
    height:30px;
    border-radius:10px;
    border: 1px solid teal;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0px 5px;
`;
const Button = styled.button`
    padding:15px;
    border:1px solid teal;
    background-color:white;
    cursor:pointer;
    border-radius:5px;
    font-weight:500;

    &:hover{
        background-color:#f8f4f4;
    }
`;
const AddContainer = styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    ${mobile({
      width:"100%"
    })}
  
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://pyxis.nymag.com/v1/imgs/f9f/a12/88e8f52eeb5024d62b0a1e5a97bae90140-riverside-tool-dye-hoodie.2x.rsquare.w600.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Hoodie</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolor
            vitae laudantium ex sapiente eos, porro asperiores omnis nemo
            commodi veniam, ipsam tempora id officiis beatae nostrum accusantium
            incidunt ducimus consectetur blanditiis. Et, consequatur laboriosam?
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black"></FilterColor>
              <FilterColor color="darkblue"></FilterColor>
              <FilterColor color="pink"></FilterColor>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
                <AmountContainer>
                    <Remove style={{cursor:"pointer"}}/>
                    <Amount>1</Amount>
                    <Add style={{cursor:"pointer"}}/>
                </AmountContainer>
                <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
