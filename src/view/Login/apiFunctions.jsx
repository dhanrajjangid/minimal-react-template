import { postApiData } from '@/services/ApiService';
import { actions as authActions } from '@/redux/slices/authSlice';
import { useDispatch } from 'react-redux';

export const useLogin = () => {
  const dispatch = useDispatch();

  const login = async (email, password) => {
    try {
      const response = await postApiData('/players/login', { email, password });
      console.log(response, "token,token,");

      dispatch(authActions.setAuthState(response?.data));
      dispatch(authActions.setIsLoggedIn(true));

      return response.user.token;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  return login;
};
