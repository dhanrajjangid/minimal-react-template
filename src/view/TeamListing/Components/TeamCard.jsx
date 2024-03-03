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

const bold = {
  fontWeight: "bold",
};

export const TeamCard = ({ team }) => {
  console.log(team, "teams is consoled");

  const date = team?.date;
  const formattedDate = dayjs(date)
    ?.locale("en")
    ?.format("DD MMMM, YYYY - hh:mm A");
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
        <OutlinedButton>Show Details</OutlinedButton>
        <ContainedButton>Join</ContainedButton>
      </ActionButtons>
    </Card>
  );
};
