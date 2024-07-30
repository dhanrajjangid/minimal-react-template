import { ContainedButton } from "@/components/Common/FormInputs";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  background: #fff;
  overflow: hidden;
  font-family: Arial, sans-serif;

  @media (max-width: 600px) {
    max-width: 100%;
    margin: 0 16px;
  }
`;

const ImageContainer = styled.div`
  position: relative;

  @media (max-width: 600px) {
    height: 200px;
    overflow: hidden;
  }
`;

const Image = styled.img`
  width: 100%;

  @media (max-width: 600px) {
    height: 100%;
    object-fit: cover;
  }
`;

const DetailsContainer = styled.div`
  padding: 1rem 0;
`;

const AgentInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const AgentImage = styled.img`
  width: 32px;
  object-fit: cover;
  height: 32px;
  border-radius: 50%;
  margin-right: 8px;
`;

const AgentName = styled.span`
  font-weight: bold;
`;

const PropertyInfo = styled.div`
  margin-bottom: 8px;
`;

const PropertyAddress = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const PropertyDetails = styled.div`
  color: #666;
  margin-bottom: 16px;
`;

const IconText = styled.span`
  margin-right: 16px;
  display: flex;
  align-items: center;
  font-size: 14px;

  & svg {
    margin-right: 4px;
  }
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
`;

const RentContainer = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border-top: 1px solid #eee;
`;

const Rent = styled.div`
  font-size: 1rem;
  flex: 1;
  font-weight: bold;
`;

const EventDetails = () => {
  return (
    <Container>
      <ImageContainer>
        <Image
          src="https://images.pexels.com/photos/4881597/pexels-photo-4881597.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Property"
        />
      </ImageContainer>
      <DetailsContainer>
        <AgentInfo>
          <AgentImage
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
            alt="Agent"
          />
          <AgentName>Amanda Simons</AgentName>
        </AgentInfo>
        <PropertyInfo>
          <PropertyAddress>
            64 Rosewood Street #2 San Francisco, CA
          </PropertyAddress>
          <PropertyDetails>
            <IconText>2 Free Class</IconText>
            <IconText>Time Flexibility</IconText>
            <IconText>1,335 sqft Area</IconText>
          </PropertyDetails>
        </PropertyInfo>
        <Description>
          Nestled in the vibrant heart of the iconic San Francisco area, this
          exceptional 2-bedroom luxury apartment offers a refined living... Read
          More
        </Description>
      </DetailsContainer>
      <RentContainer>
        <Rent>$2,300 /month</Rent>
        <div style={{ flex: 1 }}>
          <ContainedButton border='none' color="black" backgroundColor="#CDF348">
            Enroll
          </ContainedButton>
        </div>
      </RentContainer>
    </Container>
  );
};

export default EventDetails;
