import React from "react";
import styled from "styled-components";
import { AiOutlineClockCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

const Card = styled.div`
  display: flex;
  border-radius: 10px;
  padding: 1rem;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100px;
  min-width: 100px;
  height: 100px;
  border-radius: 8px;
  margin-right: 20px;
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  color: #1f3b8f;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const PillsContainer = styled.div`
  padding-top: 3px;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const Pill = styled.div`
  display: flex;
  width: fit-content;
  max-width: 100%;
  overflow: hidden;
  align-items: center;
  background-color: #f0f4f7;
  border-radius: 5px;
  padding: 2px 5px;
  font-size: 0.7rem;
  color: black;
`;

const Avatar = styled.img`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 5px;
`;

const EventCard = () => {
  return (
    <Card>
      <Image
        src="https://images.pexels.com/photos/16731731/pexels-photo-16731731/free-photo-of-field-and-seats-of-a-football-stadium.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="Event"
      />
      <Info>
        <Title>Bergen International Film Festival</Title>
        <PillsContainer>
          <Pill>
            <AiOutlineClockCircle style={{ marginRight: "5px" }} />
            <span style={{ fontWeight: "bold" }}>22 July 21</span> , 22:44 PM -
            22:22
          </Pill>
          <div style={{ display: "flex", gap: 8 }}>
            <Pill>
              <Avatar
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                alt="Avatar"
              />
              <span style={{ fontWeight: "bold" }}>Dani Danials</span>
            </Pill>
            <Pill>
              <CiLocationOn style={{ marginRight: "5px" }} />
              <span style={{ fontWeight: "bold" }}>Munich</span>
            </Pill>
          </div>
        </PillsContainer>
      </Info>
    </Card>
  );
};

export default EventCard;
