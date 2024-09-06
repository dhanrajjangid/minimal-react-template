import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const CardContainer = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  background-image: url("https://images.pexels.com/photos/5928266/pexels-photo-5928266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  color: white;
`;

const Overlay = styled.div`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 20px;
  padding: 8px;
`;

const ClassInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClassName = styled.p`
  font-size: 1rem;
  margin: 0;
  color: white;
`;

const TrainerArea = styled.p`
  font-size: 14px;
  margin: 0;
  color: white;
  opacity: 0.8;
`;

const Price = styled.p`
  font-size: 16px;
  margin: 0;
  background-color: #fe6f32;
  padding: 5px 10px;
  border-radius: 5px;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const RatingText = styled.span`
  font-size: 16px;
  margin-left: 5px;
`;

const EventCard = () => {
  return (
    <CardContainer>
      <Overlay>
        <ClassInfo>
          <Avatar src="https://randomuser.me/api/portraits/women/68.jpg" alt="Trainer" />
          <TextContainer>
            <ClassName>Yoga with Alana</ClassName>
            <TrainerArea>San Francisco, CA</TrainerArea>
          </TextContainer>
        </ClassInfo>
         <div style={{display: "flex", justifyContent: "space-between"}}>
        <RatingContainer>
          <FaStar color="#FFD700" />
          <FaStar color="#FFD700" />
          <FaStar color="#FFD700" />
          <FaStar color="#FFD700" />
          <RatingText>4.9</RatingText>
        </RatingContainer>
          <Price>Book $25/hr</Price>
          </div>
      </Overlay>
    </CardContainer>
  );
};

export default EventCard;
