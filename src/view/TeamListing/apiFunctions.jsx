import { postApiData } from "@/services/ApiService";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
export const useTeamListing = () => {
  const navigate = useNavigate();

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

  return { createTeamApi };
};
