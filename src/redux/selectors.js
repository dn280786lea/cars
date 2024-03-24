export const selectTotalCars = state => state.cars.totalCars;
export const selectCars = state => state.cars.cars;
export const selectError = state => state.cars.error;
export const selectIsLoading = state => state.cars.isLoading;

export const selectCarById = (state, _id) => {
  return state.cars.find(car => car._id === _id);
};

export const selectFavorites = state => state.cars && state.cars.favorites;
