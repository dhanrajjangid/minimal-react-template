import { ContainedButton, OutlinedButton } from "@/components/Common/FormInputs";
import {
  Card,
  ProfilePhoto,
  PlayerDetails,
  PlayerName,
  PlayerPosition,
  ActiveStatus,
  ActionButtons,
  PlayerContent
} from "../StyledComponents";

export const PlayerCard = ({ player }) => {
  return (
    <Card>
      <PlayerContent>
        <ProfilePhoto
          src="https://images.pexels.com/photos/163487/baseball-player-pitcher-ball-163487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt={player?.name}
        />
        <PlayerDetails>
          <PlayerName>{player?.name}</PlayerName>
          <PlayerPosition>
            Forward <ActiveStatus active>(Active)</ActiveStatus>
          </PlayerPosition>
        </PlayerDetails>
      </PlayerContent>
      <ActionButtons>
        <OutlinedButton>Invite</OutlinedButton>
        <ContainedButton>Follow</ContainedButton>
      </ActionButtons>
    </Card>
  );
};
