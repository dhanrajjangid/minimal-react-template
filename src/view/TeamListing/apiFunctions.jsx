import { postApiData } from "@/services/ApiService";
import { useDispatch } from "react-redux";

export const useTeamListing = () => {

  const createTeamApi = async (player_id, location) => {
    alert("Create team feature is under maintainance. Thank You!")
    // try {
    //   const response = await postApiData(
    //     `/location/player-location/${player_id}`,
    //     location
    //   );
    //   return response;
    // } catch (error) {
    //   console.error("Login failed:", error);
    //   throw error;
    // }
  };

  return { createTeamApi };
};
