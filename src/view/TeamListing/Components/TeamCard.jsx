import React from "react";
import {
  Card,
  ProfilePhoto,
  TeamDetails,
  TeamName,
  AvailableSpots,
  Date,
  Venue,
  ButtonOutlined,
  ButtonContained,
  ActionButtons,
  TeamContent
} from "../StyledComponents";
import { ContainedButton, OutlinedButton } from "@/components/Common/FormInputs";

export const TeamCard = ({ team }) => {
  return (
    <Card>
      <TeamContent>
        {/* <ProfilePhoto
          src="https://example.com/team-photo.jpg"
          alt={team?.name}
        /> */}
        <TeamDetails>
          <TeamName>Test Team</TeamName>
          <AvailableSpots>Available Spots: 5</AvailableSpots>
          <Date>Date: {'13 March 2024'}</Date>
          <Venue>Venue: {'Joga Bonito'}</Venue>
        </TeamDetails>
      </TeamContent>
      <ActionButtons>
        <OutlinedButton>Show Details</OutlinedButton>
        <ContainedButton>Join</ContainedButton>
      </ActionButtons>
    </Card>
  );
};
