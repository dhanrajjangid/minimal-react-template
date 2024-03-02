// ProductCard.js
import React from "react";
import styled, { keyframes } from "styled-components";
import { FaStar, FaStarHalf, FaShoppingCart } from "react-icons/fa";

const Card = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  background: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  overflow: hidden;

  @media (max-width: 600px) {
    width: 160px;
    height: 160px;
  }
`;

const CartIconContainer = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  @media (max-width: 600px) {
    top: 8px;
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
  padding: 0 8px;
`;

const Title = styled.p`
  font-size: 1rem;
  margin: 0px;
  color: #333;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const Price = styled.p`
  color: #555;
  margin: 0px;
  font-size: 1rem;
  font-weight: bold;
  margin-right: 8px;
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
    font-size: 0.8rem;
  }
`;

const RatingsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
  margin-bottom: 4px;
`;

const StarIcon = styled.div`
  color: #f1c40f;
  margin-right: 4px;
  font-size: 1.2rem;

  @media (max-width: 600px) {
    font-size: 0.6rem;
  }
`;

const ProductCard = ({ product }) => {
  const { title, price, image, ratings } = product;

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(ratings);
    const hasHalfStar = ratings % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <StarIcon key={i}>
          <FaStar />
        </StarIcon>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarIcon key={fullStars}>
          <FaStarHalf />
        </StarIcon>
      );
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
          <Button>
            <FaShoppingCart />
          </Button>
        </CartIconContainer>
      </Content>
    </Card>
  );
};

export default ProductCard;
