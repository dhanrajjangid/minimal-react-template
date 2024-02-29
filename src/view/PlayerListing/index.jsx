// PlayerListing.js

import React, { useEffect, useState } from "react";
import {
  CardContainer,
  Card,
  ProfilePhoto,
  PlayerDetails,
  PlayerName,
  PlayerPosition,
  Distance,
  ActiveStatus,
} from "./StyledComponents";
import { usePlayerListing } from "./apiFunctions";
import { useSelector } from "react-redux";

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

const PlayerCard = ({ player }) => {
  const user = useSelector((state) => state.auth.user);
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            });
          },
        );
      } else {
        alert('Geolocation is not supported by this browser.');
      }
    };

    getLocation();
  }, []);

  console.log(location, "location is consoled here")

  useEffect(()=> {
    if(location.latitude){
      updateUserLocation()
    }
  },[location])

  const {updateLocation, getPlayerList} = usePlayerListing()

  const updateUserLocation = async () => {
    try {
      await updateLocation(user.player_id, location);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };


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
