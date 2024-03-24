import { createSlice } from '@reduxjs/toolkit';
import { getAllCars } from './operations';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    totalCars: 0,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getAllCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllCars.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        state.cars = action.payload;

        state.totalCars = action.payload.length;
        state.error = null;
      })
      .addCase(getAllCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
export const carsReducer = carsSlice.reducer;
