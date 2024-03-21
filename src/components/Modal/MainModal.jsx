import React, { useState, useEffect } from 'react';
import NeedHelpModal from '../Modal/Modal';
import Location from 'components/icons/Location';
import { getCarById } from '../../redux/operations';

function CardItems() {
  const [cars, setCars] = useState([]);
  const [shownModal, setShownModal] = useState(false);

  useEffect(() => {
    // Передайте id, якщо він вам потрібний у `useEffect`
    const id = 'your_car_id';
    getCarById(id);
  }, []); // Змінна id не потрібна у залежності useEffect

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
                  {/* Передайте відгуки у countReviews */}
                  <p>Reviews: {countReviews(car.reviews)}</p>
                </div>
                <p>
                  <Location /> {car.location}
                </p>
                <p className="description">Description: {car.description}</p>
                <button
                  className="cards-submit"
                  type="button"
                  onClick={() => setShownModal(true)}
                >
                  Show more
                </button>
              </div>
            </div>
          </div>
        ))}
        {shownModal && (
          <NeedHelpModal
            setShowModal={setShownModal}
            onClose={() => setShownModal(false)}
          />
        )}
      </div>
    </div>
  );
}

export default CardItems;
