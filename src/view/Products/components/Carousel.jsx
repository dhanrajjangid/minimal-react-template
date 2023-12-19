// Carousel.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const SlideWrapper = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
`;

const Slide = styled.div`
  min-width: 100%;
  box-sizing: border-box;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #000;
  outline: none;

  ${(props) => (props.direction === 'right' ? 'right: 10px;' : 'left: 10px;')}
`;

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <Container>
      <SlideWrapper style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <Slide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </Slide>
        ))}
      </SlideWrapper>
      <ArrowButton direction="left" onClick={prevSlide}>
        <FiChevronLeft />
      </ArrowButton>
      <ArrowButton direction="right" onClick={nextSlide}>
        <FiChevronRight />
      </ArrowButton>
    </Container>
  );
};

export default Carousel;
