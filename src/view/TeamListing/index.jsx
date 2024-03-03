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
} from "@/components/Common/FormInputs";
import { Tabs } from "@/components/Common/Tabs";
import { useNavigate } from "react-router-dom";

const tabItems = [
  { id: 1, label: "Explore" },
  { id: 2, label: "My Teams" },
];

const TeamListing = () => {
  const navigate = useNavigate();

  const { updateLocation } = usePlayerListing();
  const { getTeamList, getMyTeams } = useTeamListing();

  const teamsList = useSelector((state) => state.listing.teamsList);
  const isLoading = useSelector(selectLoadingState);
  const player_id = JSON.parse(localStorage.getItem("user"))?.player_id;

  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [distance, setDistance] = useState(1000);
  const [activeTab, setActiveTab] = useState(tabItems[0]?.id); // State to keep track of active tab

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
    if (activeTab === 1 && location.latitude && distance) {
      // updateUserLocation();
      getTeams();
    } else if (activeTab === 2 && player_id) {
      getMyTeams(player_id)
    }
  }, [location, distance, activeTab, player_id]);
  


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

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const distanceValues = [
    1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000,
  ];

  return (
    <>
      <Tabs
        tabs={tabItems}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
      {/* <CustomDatePicker onChange={handleDateChange} /> */}
      {activeTab === 1 ? (
        <DropdownContainer>
          <Label>Distance:</Label>
          <Dropdown onChange={handleDistanceChange}>
            {distanceValues.map((value) => (
              <option key={value} value={value}>
                {value / 1000} km
              </option>
            ))}
          </Dropdown>
        </DropdownContainer>
      ) : activeTab === 2 ? (
        <ContainedButton onClick={() => navigate("/team-listing/create")}>
          + Create Team
        </ContainedButton>
      ) : null}

      {isLoading ? (
        <CardContainer>
          <PlayerCardSkeleton />
          <PlayerCardSkeleton />
          <PlayerCardSkeleton />
        </CardContainer>
      ) : activeTab === 1 ? (
        <CardContainer>
          {teamsList?.map((team) => (
            <TeamCard key={team?._id} team={team} />
          ))}
        </CardContainer>
      ) : activeTab === 2 ? (
        <CardContainer>
          {teamsList?.map((team) => (
            <TeamCard key={team?._id} team={team} myTeam />
          ))}
        </CardContainer>
      ) : null}
    </>
  );
};

export default TeamListing;
