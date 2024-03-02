import React, { useEffect, useState } from "react";
import { CardContainer } from "./StyledComponents";
import { usePlayerListing } from "./apiFunctions";
import { useSelector } from "react-redux";
import { PlayerCard } from "./Components/PlayerCard";
import { selectLoadingState } from "@/redux/slices/loadingSlice";
import PlayerCardSkeleton from "./Components/PlayerCardSkeleton";
import { ContainedButton, Dropdown, DropdownContainer, Label, OutlinedButton } from "@/components/Common/FormInputs";
import { ButtonContainer } from "../Home/Components/StyledComponents";
import UnderConstruction from "@/components/Common/UnderConstruction";

const TeamListing = () => {
  const user = useSelector((state) => state.auth.user);
  const playersList = useSelector((state) => state.listing.playersList);
  const isLoading = useSelector(selectLoadingState);

  console.log(isLoading, "isloading is");

  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [distance, setDistance] = useState(1000);

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

  // useEffect(() => {
  //   if (location.latitude && distance) {
  //     updateUserLocation();
  //     getPlayers();
  //   }
  // }, [location, distance]);

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
      await getPlayerList(location.latitude, location.longitude, distance);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleDistanceChange = (event) => {
    const selectedDistance = parseInt(event.target.value, 10); // Parse selected value to integer
    setDistance(selectedDistance);
  };

  const distanceValues = [
    1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000,
  ];

  return (
    <>
    <UnderConstruction />
    {/* <div style={{padding: '10px'}}>
      <DropdownContainer>
        <Label >Distance:</Label>
        <Dropdown onChange={handleDistanceChange}>
          {distanceValues.map((value) => (
            <option key={value} value={value}>
              {value / 1000} km
            </option>
          ))}
        </Dropdown>
      </DropdownContainer>
      </div> */}
      {/* {isLoading ? (
        <CardContainer>
          <PlayerCardSkeleton />
          <PlayerCardSkeleton />
          <PlayerCardSkeleton />
        </CardContainer>
      ) : (
        <CardContainer>
          {playersList?.map((player) => (
            <PlayerCard key={player?.id} player={player} />
          ))}
        </CardContainer>
      )} */}
    </>
  );
};

export default TeamListing;
