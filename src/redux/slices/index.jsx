import { combineReducers } from '@reduxjs/toolkit';
import sidebarReducer from '@/redux/slices/sidebarSlice';

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
});

export default rootReducer;
