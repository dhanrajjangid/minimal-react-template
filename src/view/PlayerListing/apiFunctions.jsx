import { putApiData, getApiData } from '@/services/ApiService';
import { actions as authActions } from '@/redux/slices/authSlice';
import { useDispatch } from 'react-redux';

export const usePlayerListing = () => {
  const dispatch = useDispatch();

  const updateLocation = async (player_id, location) => {
    try {
      const response = await putApiData(`/location/player-location/${player_id}`, location);

      // dispatch(authActions.setAuthState(response?.data));
      // dispatch(authActions.setIsLoggedIn(true));

      return response;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const getPlayerList = async (latitude, longitude) => {
    try {
      const response = await getApiData(`/location/search-players?latitude=${latitude}&longitude=${longitude}`);
      console.log(response, 'get player list')
      // dispatch(authActions.setAuthState(response?.data));
      // dispatch(authActions.setIsLoggedIn(true));

      return response;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };


  return {updateLocation, getPlayerList};
};
