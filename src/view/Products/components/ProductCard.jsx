// ProductCard.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaStar, FaStarHalf } from 'react-icons/fa'; // Import star icons from react-icons

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Card = styled.div`
  width: 250px;
  height: 250px;
  background: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  overflow: hidden;
  animation: ${fadeIn} 0.5s ease-in-out;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 600px) {
    width: 150px;
    height: 150px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
  border-radius: 16px 16px 0 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 8px; /* Added padding for better spacing */
`;

const Title = styled.p`
  font-size: 0.8rem;
  margin: 0px; /* Increased margin for better spacing */
  color: #333;

  @media (max-width: 600px) {
    font-size: 0.6rem;
  }
`;

const Price = styled.p`
  color: #555;
  margin: 0px;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px; /* Increased margin for better spacing */
`;

const Button = styled.button`
  background: #3498db;
  color: #fff;
  border: none;
  padding: 8px 12px; /* Adjusted padding for a larger button */
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #2980b9;
  }
`;

const RatingsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
`;

const StarIcon = styled.div`
  color: #f1c40f; 
  margin-right: 4px;
  font-size: 1.2rem; /* Default font size */

  @media (max-width: 600px) {
    font-size: 0.6rem; /* Adjust the font size for mobile view */
  }
`;

const ProductCard = ({ product }) => {
  const { title, price, image, ratings } = product;

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(ratings);
    const hasHalfStar = ratings % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarIcon key={i}><FaStar /></StarIcon>);
    }

    if (hasHalfStar) {
      stars.push(<StarIcon key={fullStars}><FaStarHalf /></StarIcon>);
    }

    return stars;
  };

  return (
    <Card>
      <Image src={image} alt={title} />
      <Content>
        <Title>{title}</Title>

        <RatingsContainer>
          {renderStars()}
        </RatingsContainer>
        <ButtonContainer>
          <Price>${price}</Price>
          <Button>Add to Cart</Button>
        </ButtonContainer>
      </Content>
    </Card>
  );
};

export default ProductCard;
