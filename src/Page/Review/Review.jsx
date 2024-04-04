import React, { useEffect, useState } from 'react';
import { getCarById } from '../../redux/operations';
import Line from 'components/icons/Line';
import Rating from '@mui/material/Rating';
import BookForm from '../../components/BookForm/BookForm';

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

  return (
    <div className="features-detail-cars" id="catalog">
      <div className="data-features">
        <Line />
        <div className="modal-cars-modal" key={car._id}>
          <ul className="detail-container">
            {car.reviews.map((review, index) => (
              <li key={index} className="reviews-icons">
                <span className="reviews-container">
                  {review.reviewer_name}
                </span>
                <div className="rating-modal-container">
                  <Rating
                    name="half-rating-read"
                    value={car.rating.toFixed(1)}
                    precision={0.1}
                    readOnly
                    max={5}
                    className="rating-modal"
                  />
                </div>
                <p>{review.comment}</p>
              </li>
            ))}
          </ul>
        </div>
        <BookForm />
      </div>
    </div>
  );
};

export default MainModal;
