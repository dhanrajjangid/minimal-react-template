import React from 'react';
import styled from 'styled-components';
import ProductCard from '@/view/Products/components/ProductCard';

const items = [
  {
    id: 1,
    title: 'Product 1',
    price: 19.99,
    image: 'https://via.placeholder.com/300',
    ratings: 4.5
  },
  {
    id: 2,
    title: 'Product 2',
    price: 29.99,
    image: 'https://via.placeholder.com/300',
    ratings: 4
  },
  {
    id: 3,
    title: 'Product 3',
    price: 39.99,
    image: 'https://via.placeholder.com/300',
    ratings: 3.5
  },
  {
    id: 4,
    title: 'Product 4',
    price: 39.99,
    image: 'https://via.placeholder.com/300',
    ratings: 3.5
  },
  {
    id: 5,
    title: 'Product 3',
    price: 39.99,
    image: 'https://via.placeholder.com/300',
    ratings: 3.5
  },
  {
    id: 6,
    title: 'Product 3',
    price: 39.99,
    image: 'https://via.placeholder.com/300',
    ratings: 3.5
  },
  {
    id: 7,
    title: 'Product 3',
    price: 39.99,
    image: 'https://via.placeholder.com/300',
    ratings: 3.5
  },
];

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
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

export default Products