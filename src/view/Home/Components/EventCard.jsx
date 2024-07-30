import React from "react";
import styled from "styled-components";
import { AiOutlineClockCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Card = styled.div`
  display: flex;
  box-sizing: border-box;
  max-width: 600px;
  margin-bottom: 1rem;
  @media (max-width: 420px) {
    width: 100%
  }
`;

const Image = styled.img`
  width: 60px;
  min-width: 60px;
  height: 60px;
  border-radius: 30%;
  margin-right: 10px;
  object-fit: cover;
`;

const Title = styled.h2`
  font-size: 0.8rem;
  font-weight: 500;
  margin: 0;
`;

const Info = styled.div`
  display: flex;
  padding: 0 0.2rem;
  flex-direction: column;
`;

const PillsContainer = styled.div`
  padding-top: 3px;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const Pill = styled.div`
  display: flex;
  width: fit-content;
  max-width: 100%;
  overflow: hidden;
  align-items: center;
  font-size: 0.65rem;
`;

const Location = styled.div`
  display: flex;
  background-color: #CDF348;
  border-radius: 1rem;
  padding: 0 0.3rem;
  width: fit-content;
  max-width: 100%;
  overflow: hidden;
  align-items: center;
  font-size: 0.65rem;
  color: black;
`

const Avatar = styled.img`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 5px;
`;

const EventCard = () => {
  const navigate = useNavigate();
  return (
    <Card onClick={() => navigate("/event-details")}>
      <Image
        src="https://images.pexels.com/photos/5067824/pexels-photo-5067824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Event"
      />
      <Info>
        <Title>Leonel Messi</Title>
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
            <Location>
              <CiLocationOn style={{ marginRight: "5px" }} />
              <span style={{ fontWeight: "bold" }}>Munich</span>
            </Location>
          </div>
        </PillsContainer>
      </Info>
    </Card>
  );
};

export default EventCard;
