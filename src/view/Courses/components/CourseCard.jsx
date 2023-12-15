// CourseCard.js

import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 90%;
  height: 150px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: auto;
`;

const LeftSection = styled.div`
  flex-grow: 1;
  box-sizing: border-box;
  padding: 10px;
  background: linear-gradient(to bottom, grey, black);
  border-radius: 8px 0 0 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 16px; /* Add padding for better spacing */
`;

const RightSection = styled.div`
  display: flex;
  max-height: 100%;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  flex: 0 0 60%;
  background-color: #fff;
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

const CourseCard = () => {
  return (
    <CardContainer>
      <LeftSection>
        <Type>COURSE</Type>
        <Title>Javascript Fundamentals</Title>
        <Type to="/all-chapters">View All Chapters</Type>
      </LeftSection>
      <RightSection>
        <Description>Chapters - 10</Description>
        <Description>
          This is a test description of the course provided on Javascript
          Fundamentals
        </Description>
      </RightSection>
    </CardContainer>
  );
};

export default CourseCard;
