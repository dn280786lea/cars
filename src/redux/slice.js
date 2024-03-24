import { createSlice } from '@reduxjs/toolkit';
import { getAllCars } from './operations';

const loadFavoritesFromLocalStorage =
  JSON.parse(localStorage.getItem('favorites')) || [];

const initialState = {
  cars: [],
  totalCars: 0,
  isLoading: false,
  error: null,
  favorites: loadFavoritesFromLocalStorage,
};
export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    addToFavorites(state, { payload }) {
      state.favorites.push(payload);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    removeFromFavorites(state, { payload }) {
      state.favorites = state.favorites.filter(car => car._id !== payload);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    clearFavorites(state) {
      state.favorites = [];
      localStorage.removeItem('favorites');
    },
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
export const { addToFavorites, removeFromFavorites, clearFavorites } =
  carsSlice.actions;
