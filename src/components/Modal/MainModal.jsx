import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NeedHelpModal from '../Modal/Modal';
import Location from 'components/icons/Location';
import { getCarById } from '../../redux/operations';

const CardItems = () => {
  const { id } = useParams();
  const [cars, setCars] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const carsData = await getCarById(id);
        setCars(carsData);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchCars();
  }, [id]);

  if (!cars) {
    return <div>Loading cars...</div>;
  }
  const countReviews = reviews => {
    return reviews.length;
  };

  return (
    <div className="catalog-cars" id="catalog">
      <div className="wrapper">
        {cars.map(car => (
          <div className="catalog-cars" key={car._id}>
            <div className="catalog-car">
              <div className="image-container">
                <img
                  className="car-photo"
                  src={car.gallery[0]}
                  alt={car.name}
                />
              </div>
              <div className="details-container">
                <div className="title-container">
                  <h2 className="title-cars">{car.name}</h2>
                  <h2 className="title-price">Price: ${car.price}</h2>
                </div>
                <div className="rating-wrapper">
                  <div className="rating-container">
                    <p>Rating: {car.rating}</p>
                  </div>
                  <p>Reviews: {countReviews(car.reviews)}</p>
                </div>
                <p>
                  <Location /> {car.location}
                </p>
                <p className="description">Description: {car.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardItems;
