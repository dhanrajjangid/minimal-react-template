import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loggedIn: false
  },
  reducers: {
    isLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    }
  },
});

export const { actions, reducer } = authSlice;
export default authSlice.reducer;
