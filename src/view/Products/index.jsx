import React from 'react';
import styled from 'styled-components';
import ProductCard from '@/view/Products/components/ProductCard';

const items = [
  {
    id: 1,
    title: 'Running Shoes',
    price: 69.99,
    image: 'https://images.pexels.com/photos/936019/pexels-photo-936019.jpeg',
    ratings: 4.5,
  },
  {
    id: 2,
    title: 'Sports T-Shirt',
    price: 29.99,
    image: 'https://images.pexels.com/photos/933076/pexels-photo-933076.jpeg',
    ratings: 4,
  },
  {
    id: 3,
    title: 'Sportswear Set',
    price: 79.99,
    image: 'https://images.pexels.com/photos/1170975/pexels-photo-1170975.jpeg',
    ratings: 3.5,
  },
  {
    id: 4,
    title: 'Athletic Shorts',
    price: 39.99,
    image: 'https://images.pexels.com/photos/965343/pexels-photo-965343.jpeg',
    ratings: 3.5,
  },
  {
    id: 5,
    title: 'Running Jacket',
    price: 49.99,
    image: 'https://images.pexels.com/photos/1428663/pexels-photo-1428663.jpeg',
    ratings: 3.5,
  },
  {
    id: 6,
    title: 'Yoga Leggings',
    price: 44.99,
    image: 'https://images.pexels.com/photos/2872904/pexels-photo-2872904.jpeg',
    ratings: 3.5,
  },
  {
    id: 7,
    title: 'Compression Socks',
    price: 19.99,
    image: 'https://images.pexels.com/photos/3394060/pexels-photo-3394060.jpeg',
    ratings: 3.5,
  },
  {
    id: 8,
    title: 'Sweatband Set',
    price: 15.99,
    image: 'https://images.pexels.com/photos/3486892/pexels-photo-3486892.jpeg',
    ratings: 3.5,
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