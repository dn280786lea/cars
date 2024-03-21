import React, { useEffect, useState } from 'react';
import Location from 'components/icons/Location';
import { getCarById } from '../../redux/operations';
import {} from './MainModal.css';

const MainModal = () => {
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const carData = await getCarById('4');
        setCar(carData);
      } catch (error) {
        console.error('Error fetching car information:', error);
        setCar(null);
      }
    };
    fetchCar();
  }, []);

  if (!car) {
    return <div>Loading car...</div>;
  }

  const countReviews = reviews => {
    return reviews.length;
  };

  return (
    <div className="detail-cars" id="catalog">
      <div className="wrapper-modal">
        <div className="modal-cars-modal" key={car._id}>
          <div className="modal-car">
            <div className="details-container">
              <div className="title-container">
                <div className="car-modal-detal">
                  <h2 className="title-cars">{car.name}</h2>
                  <div className="rating-modal-wrapper">
                    <div className="rating-modal-container">
                      <p>Rating: {car.rating}</p>
                    </div>
                    <p>Reviews: {countReviews(car.reviews)}</p>
                  </div>
                  <p className="local-modal">
                    <Location /> {car.location}
                  </p>
                  <h2 className="title-price-modal">Price: ${car.price}</h2>
                </div>
              </div>
              <div className="image-wrapper">
                {car.gallery.map((photo, index) => (
                  <img key={index} className="car-photo" src={photo} alt="" />
                ))}
              </div>
              <p className="description-modal">
                Description: {car.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainModal;
