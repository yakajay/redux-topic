import { configureStore } from '@reduxjs/toolkit';
import bookingSliceReducer from './bookingSlice';
import todoReducer from './todoSlice';

export const store = configureStore({
  reducer: {
    kumar: bookingSliceReducer,
    ajay: todoReducer
  },
})