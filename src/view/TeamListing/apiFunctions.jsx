import { postApiData, getApiData } from "@/services/ApiService";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { actions as listingActions } from "@/redux/slices/listingSlice";
import { useDispatch } from "react-redux";

export const useTeamListing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const createTeamApi = async (player_id, data) => {
    const payload = {...data, player_id: player_id}
    try {
      const response = await postApiData(
        `/teams/addTeam`,
        payload
      );
      toast.success(response?.message ?? "Team created successfully")
      navigate('/team-listing')
      return response;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const getTeamList = async (latitude, longitude, distance) => {
    try{
      const response = await getApiData(
        `/location/search-teams?latitude=${latitude}&longitude=${longitude}&distance=${distance}`
      );
      dispatch(listingActions.setTeamListState(response?.data));

      return response
    } catch (error){
      console.error("Failed to fetch team list", error)
    }
  }

  const getMyTeams = async (player_id) => {
    try{
      const response = await getApiData(
        `/teams/getTeamsByPlayerId/${player_id}`
      );
      dispatch(listingActions.setTeamListState(response?.data));

      return response
    } catch (error){
      console.error("Failed to fetch team list", error)
    }
  }

  return { createTeamApi, getTeamList, getMyTeams };
};
