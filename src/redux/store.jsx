import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './reducer';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
});
