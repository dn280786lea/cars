import React, { useEffect, useState } from 'react';
import Location from 'components/icons/Location';
import { getCarById } from '../../redux/operations';
import {} from './MainModal.css';
import Rating from '@mui/material/Rating';
import Review from '../Review/Review';
import Features from '../Features/Features';

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
                  <div className="car-datail-review">
                    <div className="rating-modal-wrapper">
                      <div className="rating-modal-container">
                        <Rating
                          name="half-rating-read"
                          value={car.rating.toFixed(1)}
                          precision={0.1}
                          readOnly
                          max={1}
                          className="rating-modal"
                        />
                        <p className="car_rating">{car.rating}</p>
                      </div>
                      <p className="car-reviews">
                        (Reviews: {countReviews(car.reviews)})
                      </p>
                    </div>
                    <p className="local-modal">
                      <Location /> {car.location}
                    </p>
                  </div>
                  <h2 className="title-price-modal">Price: ${car.price}</h2>
                </div>
              </div>
              <div className="image-wrapper">
                {car.gallery.map((photo, index) => (
                  <img
                    key={index}
                    className="car-photo-modal"
                    src={photo}
                    alt=""
                  />
                ))}
              </div>
              <p className="description-modal">
                Description: {car.description}
              </p>
              <div>
                <Features />
              </div>

              {/*     <Review /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainModal;
