import { combineReducers } from '@reduxjs/toolkit';
import sidebarReducer from '@/redux/slices/sidebarSlice';
import authReducer from '@/redux/slices/authSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  sidebar: sidebarReducer,
});

export default rootReducer;
