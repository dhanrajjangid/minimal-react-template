// ProductCard.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaStar, FaStarHalf, FaShoppingCart  } from 'react-icons/fa'; // Import star icons from react-icons

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Card = styled.div`
  position: relative;
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

const CartIconContainer = styled.div`
  position: absolute;
  top: 8px; /* Adjust the top position as needed */
  right: 8px; /* Adjust the right position as needed */
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
  font-size: 0.8rem;
  font-weight: bold;
  margin-right: 8px; /* Added margin to separate price and stars */
`;


const Button = styled.button`
  background: #000; /* Set the background color to black */
  color: #fff;
  border: none;
  padding: 8px 12px; /* Default padding for larger screens */
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* Added box-shadow transition */

  &:hover {
    background: #333; /* Adjust hover background color */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Added box shadow on hover */
  }

  @media (max-width: 600px) {
    padding: 4px 8px; /* Adjusted padding for mobile view */
    font-size: 0.8rem; /* Optional: Adjust font size for mobile view */
  }
`;

const RatingsContainer = styled.div`
  display: flex;
  align-items: center;
//   gap: 10px;
  margin-top: 4px;
  margin-bottom: 4px; /* Added margin-bottom for better spacing */
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

        {/* Ratings and Price in the same line */}
        <RatingsContainer>
          <Price>${price}</Price>
          {renderStars()}
        </RatingsContainer>

        {/* Container for the cart icon */}
        <CartIconContainer>
          <Button><FaShoppingCart /></Button>
        </CartIconContainer>
      </Content>
    </Card>
  );
};

export default ProductCard;
