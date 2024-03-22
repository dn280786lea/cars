import React, { useEffect, useState } from 'react';
import { getCarById } from '../../redux/operations';
import Line from 'components/icons/Line';
import Rating from '@mui/material/Rating';

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
        <form action="form" className="form-container">
          <h2>Book your campervan now</h2>
          <p>Stay connected! We are always ready to help you.</p>
          <div className="form-row">
            <input type="text" name="text" placeholder="Name" />
          </div>
          <div className="form-row">
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="form-row">
            <input type="date" name="date" placeholder="Booking date" />
          </div>
          <div className="form-row">
            <textarea type="text" name="comment" placeholder="Comment" />
          </div>
          <button className="features-submit" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default MainModal;
