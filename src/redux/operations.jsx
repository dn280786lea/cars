import axios from 'axios';

export const getAllCars = async (displayedCars, setTotalCars, setCars) => {
  try {
    const response = await axios.get(
      'https://65f98457df1514524611d93d.mockapi.io/adverts/cars'
    );
    setTotalCars(response.data.length);
    setCars(response.data.slice(0, displayedCars));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const getCarById = async id => {
  try {
    const response = await axios.get(
      `https://65f98457df1514524611d93d.mockapi.io/adverts/cars/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching car with id ${id}:`, error);
    return null;
  }
};
