import React, { useEffect, useState } from "react";
import {
  CardContainer,
} from "./StyledComponents";
import { usePlayerListing } from "./apiFunctions";
import { useSelector } from "react-redux";
import { PlayerCard } from "./Components/PlayerCard";

const PlayerListing = () => {
  const user = useSelector((state) => state.auth.user);
  const playersList = useSelector((state) => state.listing.playersList);

  const [location, setLocation] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        });
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, []);

  useEffect(() => {
    if (location.latitude) {
      updateUserLocation();
      getPlayers();
    }
  }, [location]);

  const { updateLocation, getPlayerList } = usePlayerListing();

  const updateUserLocation = async () => {
    try {
      await updateLocation(user.player_id, location);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const getPlayers = async () => {
    try {
      await getPlayerList(location.latitude, location.longitude);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <CardContainer>
      {playersList?.map((player) => (
        <PlayerCard key={player?.id} player={player} />
      ))}
    </CardContainer>
  );
};

export default PlayerListing;
