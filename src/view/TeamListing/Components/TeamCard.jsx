import React from "react";
import {
  Card,
  ProfilePhoto,
  TeamDetails,
  TeamName,
  SubText,
  ActionButtons,
  TeamContent,
} from "../StyledComponents";
import {
  ContainedButton,
  OutlinedButton,
} from "@/components/Common/FormInputs";
import dayjs from "dayjs";
import "dayjs/locale/en";
import { useNavigate } from "react-router-dom";
import { useTeamListing } from "../apiFunctions";

const bold = {
  fontWeight: "bold",
};

export const TeamCard = ({ team }) => {
  console.log(team, "teams is consoled");
  const navigate = useNavigate();
  const {joinTeamApi} = useTeamListing()
  const { player_id, name } = JSON.parse(localStorage.getItem("user"));
  const date = team?.date;
  const formattedDate = dayjs(date)
    ?.locale("en")
    ?.format("DD MMMM, YYYY - hh:mm A");


    const joinTeam = () => {
      const payload = {
        teamId: team?._id,
        playerId: player_id,
        playerName: name,
      };
      joinTeamApi(payload);
    };
  return (
    <Card>
      <TeamContent>
        {/* <ProfilePhoto
          src="https://example.com/team-photo.jpg"
          alt={team?.name}
        /> */}
        <TeamDetails>
          <TeamName>{team?.teamName}</TeamName>
          <SubText>
            <span style={bold}>Available Spots:</span> {team?.remaining}
          </SubText>
          <SubText>
            <span style={bold}>Date:</span> {formattedDate}
          </SubText>
          <SubText>
            <span style={bold}>Venue:</span> {team.venue}
          </SubText>
        </TeamDetails>
      </TeamContent>
      <ActionButtons>
        <OutlinedButton onClick={()=> navigate(`/team-details/${team?._id}`)}>Show Details</OutlinedButton>
        <ContainedButton onClick={()=> joinTeam()} >Join</ContainedButton>
      </ActionButtons>
    </Card>
  );
};
