import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice.jsx'; // Make sure this matches

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});