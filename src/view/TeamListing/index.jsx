import React, { useEffect, useState } from "react";
import { CardContainer } from "./StyledComponents";
import { useTeamListing } from "./apiFunctions";
import { usePlayerListing } from "@/view/PlayerListing/apiFunctions";
import { useSelector } from "react-redux";
import { TeamCard } from "./Components/TeamCard";
import { selectLoadingState } from "@/redux/slices/loadingSlice";
import PlayerCardSkeleton from "./Components/PlayerCardSkeleton";
import {
  ContainedButton,
  Dropdown,
  DropdownContainer,
  Label,
  OutlinedButton,
} from "@/components/Common/FormInputs";
import { ButtonContainer } from "../Home/Components/StyledComponents";
import UnderConstruction from "@/components/Common/UnderConstruction";
import { CustomDatePicker } from "@/components/Common/DatePickers";
import { useNavigate } from "react-router-dom";

const TeamListing = () => {
  const navigate = useNavigate()

  const { updateLocation } = usePlayerListing();
  const { getTeamList } = useTeamListing();

  const teamsList = useSelector((state) => state.listing.teamsList);
  const isLoading = useSelector(selectLoadingState);
  const player_id = JSON.parse(localStorage.getItem('user'))?.player_id

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

  useEffect(() => {
    if (location.latitude && distance) {
      // updateUserLocation();
      getTeams();
    }
  }, [location, distance]);

  


  const updateUserLocation = async () => {
    try {
      await updateLocation(player_id, location);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const getTeams = async () => {
    try {
      await getTeamList(location.latitude, location.longitude, distance);
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
      {/* <CustomDatePicker onChange={handleDateChange} /> */}

      <div
        style={{
          padding: "10px",
          display: "flex",
          gap: "2rem",
          alignItems: "end",
          borderBottom: "1px solid #333"
        }}
      >
        <div style={{ width: "50%" }}>
          <DropdownContainer>
            <Label>Distance:</Label>
            <Dropdown safari={true} onChange={handleDistanceChange}>
              {distanceValues.map((value) => (
                <option key={value} value={value}>
                  {value / 1000} km
                </option>
              ))}
            </Dropdown>
          </DropdownContainer>
        </div>
        <div style={{ width: "50%" }}>
          <ContainedButton onClick={()=> navigate('/team-listing/create')}>+ Create Team</ContainedButton>
        </div>
      </div>
      {isLoading ? (
        <CardContainer>
          <PlayerCardSkeleton />
          <PlayerCardSkeleton />
          <PlayerCardSkeleton />
        </CardContainer>
      ) : (
        <CardContainer>
          {teamsList?.map((team) => (
            <TeamCard key={team?._id} team={team} />
          ))}
        </CardContainer>
      )}
    </>
  );
};

export default TeamListing;
