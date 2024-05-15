import React from "react";
import styled from "styled-components";
import ProductCard from "@/view/Products/components/ProductCard";

const items = [
  {
    id: 1,
    title: "Running Shoes",
    price: 69.99,
    image: "https://source.unsplash.com/300x300/?product",
    ratings: 4.5,
  },
  {
    id: 2,
    title: "Sports T-Shirt",
    price: 29.99,
    image: "https://source.unsplash.com/300x300/?product",
    ratings: 4,
  },
  {
    id: 3,
    title: "Sportswear Set",
    price: 79.99,
    image: "https://source.unsplash.com/300x300/?product",
    ratings: 3.5,
  },
  {
    id: 4,
    title: "Athletic Shorts",
    price: 39.99,
    image: "https://source.unsplash.com/300x300/?product",
    ratings: 3.5,
  },
  {
    id: 5,
    title: "Running Jacket",
    price: 49.99,
    image: "https://source.unsplash.com/300x300/?product",
    ratings: 3.5,
  },
  {
    id: 6,
    title: "Yoga Leggings",
    price: 44.99,
    image: "https://source.unsplash.com/300x300/?product",
    ratings: 3.5,
  },
  {
    id: 7,
    title: "Compression Socks",
    price: 19.99,
    image: "https://source.unsplash.com/300x300/?product",
    ratings: 3.5,
  },
  {
    id: 8,
    title: "Sweatband Set",
    price: 15.99,
    image: "https://source.unsplash.com/300x300/?product",
    ratings: 3.5,
  },
];

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  padding: 4px;
`;

const Products = () => {
  return (
    <Container>
      {items.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Container>
  );
};

export default Products;
