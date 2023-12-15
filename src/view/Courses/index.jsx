import React from "react";
import styled from "styled-components";
import Card from "@/view/Courses/components/CourseCard";

const ParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 100%;
  overflow-y: auto;
`;

const Heading = styled.h1`
  font-size: 1.8rem;
  font-weight: 500;
  margin: 5px 0;
`;

const Courses = () => {
  return (
    <ParentContainer>
      <Heading>Available Courses</Heading>

      {[1, 2, 3, 4].map((item) => {
        return <Card key={item} />;
      })}
    </ParentContainer>
  );
};

export default Courses;
