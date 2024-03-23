import { createSlice } from '@reduxjs/toolkit';
import { getCars } from './operations';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getCars.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCars.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.cars = action.payload;
    },
    [getCars.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const carsReducer = carsSlice.reducer;
