import React from "react";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

const CardContainer = styled.div`
  position: relative;
  box-sizing: border-box;;
  width: 250px;
  height: 250px;
  background: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.07);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column; /* Updated to column layout */

  @media (max-width: 768px) {
    width: 100%;
    height: 250px;
  }
`;

const TopSection = styled.div`
  box-sizing: border-box;
  padding: 10px;
  background: linear-gradient(to bottom, grey, black);
  border-radius: 16px 16px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Align items with space between them */
  align-items: flex-start; /* Align items to the start of the container */
`;

const BottomSection = styled.div`
box-sizing: border-box;
  max-height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  flex: 0 0 60%;
  background-color: #fff;
  flex-grow: 1; /* Allow the content to take remaining space */
`;

const Type = styled.p`
  color: #c2c2c2;
  font-size: 0.8rem;
  margin: 0;
`;

const Title = styled.h2`
  color: #fff;
  margin: 0;
  font-weight: 400;
  line-height: 1.8rem;
`;

const Description = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
`;

const CartIconContainer = styled.div`
  position: absolute;
  right: 8px;

  @media (max-width: 768px) {
    bottom: 8px;
  }
`;

const Button = styled.button`
  background: #000;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    background: #333;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 600px) {
    padding: 4px 8px;
    font-size: 1.5rem;
  }
`;

const CourseCard = () => {
  return (
    <CardContainer>
      <TopSection>
        <div>
          <Type>COURSE</Type>
          <Title>Javascript Fundamentals</Title>
        </div>

        {/* Container for the cart icon */}
        <CartIconContainer>
          <Button>
            <FaShoppingCart />
          </Button>
        </CartIconContainer>
      </TopSection>
      <BottomSection>
        <Description>Chapters - 10</Description>
        <Description>
          This is a test description of the course provided on Javascript
          Fundamentals
        </Description>
      </BottomSection>
    </CardContainer>
  );
};

export default CourseCard;
