// EventCard.js
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  width: 80px;
  min-width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const Content = styled.div`
  padding: 16px;
`;

const UpperBox = styled.div`
  box-sizing: border-box;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
  box-sizing: border-box;
`;

const EventType = styled.span`
  font-size: 0.6rem;
  font-weight: bold;
  color: #777;
`;

const EventName = styled.h2`
  font-size: 0.8rem;
  font-weight: bold;
  margin: 0;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

const Detail = styled.div`
  text-align: center;
`;

const Label = styled.div`
  font-size: 0.8rem;
  color: #777;
`;

const Value = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

const ViewEvent = styled.a`
  display: block;
  text-align: center;
  padding: 0.8rem;
  color: #fff;
  text-decoration: none;
  border-top: 1px solid #eee;
  background-color: #132152 ;
`;

const EventCard = () => {
  return (
    <Card>
      <Content>
        <UpperBox>
          <Image
            src="https://images.pexels.com/photos/16731731/pexels-photo-16731731/free-photo-of-field-and-seats-of-a-football-stadium.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Event"
          />
          <Title>
            <EventType>EVENT</EventType>
            <EventName>Test Yoga Class - Sunrise Serenity</EventName>
          </Title>
        </UpperBox>
        <Details>
          <Detail>
            <Label>Date</Label>
            <Value>17 Oct</Value>
          </Detail>
          <Detail>
            <Label>Time</Label>
            <Value>20:00</Value>
          </Detail>
          <Detail>
            <Label>Invited</Label>
            <Value>10</Value>
          </Detail>
        </Details>
      </Content>
      <ViewEvent href="#">View event</ViewEvent>
    </Card>
  );
};

export default EventCard;
