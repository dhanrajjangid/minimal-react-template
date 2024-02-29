import { combineReducers } from '@reduxjs/toolkit';
import sidebarReducer from '@/redux/slices/sidebarSlice';
import authReducer from '@/redux/slices/authSlice'
import listingReducer from '@/redux/slices/listingSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  sidebar: sidebarReducer,
  listing: listingReducer
});

export default rootReducer;
