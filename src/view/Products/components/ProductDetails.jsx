import React from "react";
import styled from "styled-components";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiFillStar,
} from "react-icons/ai";
import Carousel from "./Carousel";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: column;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  color: #000;
`;

const ProductTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const Price = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const AddToCartButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  background-color: #000;
  color: #fff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  svg {
    margin-right: 5px;
  }
`;

const RelevantProducts = styled.div`
  margin-top: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
`;

const LikeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #ff0000;
  margin-left: 5px;
`;

const Reviews = styled.div`
  margin-top: 20px;
`;

const Review = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  svg {
    color: #ffd700;
    margin-right: 5px;
  }
`;

const QuantitySelector = styled.select`
  font-size: 16px;
  padding: 5px;
  margin-right: 10px;
`;

const ProductDetails = () => {
  const carouselImages = [
    "https://source.unsplash.com/300x300/?product",
    "https://source.unsplash.com/300x300/?product",
    "https://source.unsplash.com/300x300/?product",
  ];

  return (
    <Container>
      <Carousel images={carouselImages} />
      <ProductTitle>Product Name</ProductTitle>
      <ProductDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
        mauris sed urna iaculis gravida. Nulla facilisi. Proin eu neque
        suscipit, congue ligula at, malesuada urna.
      </ProductDescription>
      <Price>$99.99</Price>
      <QuantitySelector>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        {/* Add more options as needed */}
      </QuantitySelector>
      <AddToCartButton>
        <AiOutlineShoppingCart />
        Add to Cart
      </AddToCartButton>

      {/* Relevant Products Section */}
      <RelevantProducts>
        <h2>Relevant Products</h2>
        <ProductCard>
          <img
            src="https://source.unsplash.com/300x300/?product"
            alt="Relevant Product 1"
          />
          <p>Relevant Product 1</p>
        </ProductCard>
        <ProductCard>
          <img
            src="https://source.unsplash.com/300x300/?product"
            alt="Relevant Product 2"
          />
          <p>Relevant Product 2</p>
        </ProductCard>
        {/* Add more relevant products as needed */}
      </RelevantProducts>

      {/* Save to Liked Items Button */}
      <LikeButton>
        <AiOutlineHeart />
        Save to Liked
      </LikeButton>

      {/* Reviews Section */}
      <Reviews>
        <h2>Reviews</h2>
        <Review>
          <Rating>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </Rating>
          <p>Excellent product! Highly recommended.</p>
        </Review>
        {/* Add more reviews as needed */}
      </Reviews>
    </Container>
  );
};

export default ProductDetails;
