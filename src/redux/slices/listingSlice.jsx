import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  playersList: [],
};

const authSlice = createSlice({
  name: 'listing',
  initialState,
  reducers: {
    setPlayerListState: (state, action) => {
      state.playersList = action.payload;
    }
  },
});

export const { actions, reducer } = authSlice;
export default authSlice.reducer;
