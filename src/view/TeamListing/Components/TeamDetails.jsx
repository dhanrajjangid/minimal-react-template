import React, { useEffect } from "react";
import {
  Container,
  TeamImage,
  EventInfo,
  EventName,
  EventDetails,
  TeamListContainer,
  TeamContainer,
  TeamProfileImage,
  TeamName,
} from "../Styled/TeamDetailsStyled";
import { ContainedButton } from "@/components/Common/FormInputs";
import {
  AiOutlineEnvironment,
  AiOutlineClockCircle,
  AiOutlineArrowLeft,
} from "react-icons/ai"; // Importing necessary icons
import { useNavigate, useParams } from "react-router-dom";
import { useTeamListing } from "../apiFunctions";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

const TeamDetails = ({}) => {
  const { id } = useParams();
  const navigate = useNavigate()
  const { getTeamById, joinTeamApi } = useTeamListing();
  const teamDetails = useSelector((state) => state.listing.teamDetails);
  const { player_id, name } = JSON.parse(localStorage.getItem("user"));
  const formattedDate = dayjs(teamDetails?.date)
    ?.locale("en")
    ?.format("DD MMMM, YYYY - hh:mm A");

  useEffect(() => {
    if (id) {
      getTeamById(id);
    }
  }, [id]);

  const joinTeam = () => {
    const payload = {
      teamId: id,
      playerId: player_id,
      playerName: name,
    };
    joinTeamApi(payload);
  };

  const { teamName, date, venue, remaining, capacity, members } = teamDetails;

  return (
    <Container>
      <div
        style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px"
        }}
        >
        <AiOutlineArrowLeft
            onClick={() => navigate("/team-listing")}
            style={{ cursor: "pointer", fontSize: "24px" }} // Adjust the font size as needed
        />
        </div>
      <TeamImage
        src="https://images.pexels.com/photos/10719279/pexels-photo-10719279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Team Image"
      />
      <EventInfo>
        <EventName>{teamName || ""}</EventName>
        <EventDetails>
          <AiOutlineClockCircle /> {formattedDate || ""}
        </EventDetails>
        <EventDetails>
          <AiOutlineEnvironment /> {venue || ""}
        </EventDetails>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <EventDetails>
            <strong>Capacity:</strong> {capacity || ""}
          </EventDetails>
          <EventDetails>
            <strong>Remaining Slots:</strong> {remaining || ""}
          </EventDetails>
        </div>
        <hr />
        <TeamListContainer>
          {members?.map((member, index) => (
            <TeamContainer key={index}>
              <TeamProfileImage
                src={
                  "https://images.pexels.com/photos/10340629/pexels-photo-10340629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt={`Profile Image`}
              />
              <TeamName>{member?.name}</TeamName>
            </TeamContainer>
          ))}
        </TeamListContainer>
      </EventInfo>

      <ContainedButton onClick={() => joinTeam()}>Join Team</ContainedButton>
    </Container>
  );
};

export default TeamDetails;
