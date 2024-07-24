// src/ProfileCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  max-width: 100%;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 auto;

  @media (min-width: 600px) {
    max-width: 600px;
  }
`;

const Header = styled.div`
  background: url('https://images.pexels.com/photos/4881597/pexels-photo-4881597.jpeg?auto=compress&cs=tinysrgb&w=600') no-repeat center center;
  background-size: cover;
  height: 200px;
  position: relative;
`;

const Avatar = styled.img`
  width: 100px;
  object-fit: cover;
  height: 100px;
  border-radius: 50%;
  border: 3px solid #fff;
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
`;

const Content = styled.div`
  padding: 60px 20px 20px;
  text-align: center;
`;

const Name = styled.h2`
  font-size: 1.5em;
  margin: 0;
`;

const Username = styled.p`
  color: #888;
  margin: 5px 0;
`;

const Description = styled.p`
  margin: 10px 0;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const Stat = styled.div`
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 1.2em;
  font-weight: bold;
`;

const StatLabel = styled.div`
  color: #888;
`;

const UserProfile = () => {
  return (
    <Card>
      <Header>
        <Avatar src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" alt="Profile" />
      </Header>
      <Content>
        <Name>Kim Parkinson</Name>
        <Username>@theunderdog</Username>
        <Description>I will inspire 10 million people to do what they love the best they can!</Description>
        <Stats>
          <Stat>
            <StatValue>404</StatValue>
            <StatLabel>posts</StatLabel>
          </Stat>
          <Stat>
            <StatValue>1.6k</StatValue>
            <StatLabel>likes</StatLabel>
          </Stat>
        </Stats>
      </Content>
    </Card>
  );
};

export default UserProfile;
