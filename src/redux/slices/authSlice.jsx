// AuthSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false,
  user: {
    name: null,
    email: null,
    token: null,
    player_id: null
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState: (state, action) => {
    console.log(action.payload, "useruser")

      return { ...state, user: { ...state.user, ...action.payload } };
    },
    setIsLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    }
  },
});

export const { actions, reducer } = authSlice;
export default authSlice.reducer;
