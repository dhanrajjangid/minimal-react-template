import React from "react";
import styled from "styled-components";

// Sample player data
const playersData = [
  {
    id: 1,
    name: "John Doe",
    position: "Forward",
    profilePhoto: "https://images.pexels.com/photos/1436145/pexels-photo-1436145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    distance: "10 km",
    active: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Defender",
    profilePhoto: "https://images.pexels.com/photos/1436145/pexels-photo-1436145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    distance: "15 km",
    active: false,
  },
  // Add more player data as needed
];

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const Card = styled.div`
  display: flex; /* Align items in a row */
  align-items: center; /* Vertically center items */
  width: 250px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const ProfilePhoto = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px; /* Add margin to separate from other content */
`;

const PlayerDetails = styled.div`
  flex: 1; /* Take up remaining space */
`;

const PlayerName = styled.h3`
  margin: 5px 0;
`;

const PlayerPosition = styled.p`
  margin: 5px 0;
`;

const Distance = styled.p`
  margin: 5px 0;
`;

const ActiveStatus = styled.span`
  color: ${({ active }) => (active ? "green" : "red")};
`;

const PlayerCard = ({ player }) => {
  return (
    <Card>
      <ProfilePhoto src={player.profilePhoto} alt={player.name} />
      <PlayerDetails>
        <PlayerName>{player.name}</PlayerName>
        <PlayerPosition>{player.position}</PlayerPosition>
        <Distance>Distance: {player.distance}</Distance>
        <ActiveStatus active={player.active}>
          {player.active ? "Active" : "Inactive"}
        </ActiveStatus>
      </PlayerDetails>
    </Card>
  );
};

const PlayerListing = () => {
  return (
    <CardContainer>
      {playersData.map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </CardContainer>
  );
};

export default PlayerListing;
