import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CardItems.css';
import NeedHelpModal from '../Modal/Modal';

function CardItems() {
  const [cars, setCars] = useState([]);
  const [displayedCars, setDisplayedCars] = useState(4);
  const [totalCars, setTotalCars] = useState(0);
  const [shownModal, setShownModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
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

    fetchData();
  }, [displayedCars]);

  const countReviews = reviews => {
    return reviews.length;
  };

  const loadMore = () => {
    setDisplayedCars(displayedCars + 4);
  };

  return (
    <div>
      <div className="catalog-cars" id="catalog">
        {cars.map((car, index) => (
          <div key={car._id} className="advertisement">
            <img className="car-photo" src={car.gallery[0]} alt={car.name} />
            <div className="car-details">
              <h3>{car.name}</h3>
              <p>Price: ${car.price}</p>
              <p>Rating: {car.rating}</p>
              <p>Reviews: {countReviews(car.reviews)}</p>
              <p>Location: {car.location}</p>
              <p>Description: {car.description}</p>
              <ul className="car-icons">
                <li className="data-icons">
                  {car.adults && <p>Adults: {car.adults}</p>}
                </li>
                <li className="data-icons">{car.transmission}</li>
                <li className="data-icons">{car.engine}</li>
                <li className="data-icons">Kitchen: {car.details.kitchen}</li>
                <li className="data-icons">
                  {car.details.beds && <p>Beds: {car.details.beds}</p>}
                </li>
                <li className="data-icons">Toilet: {car.details.toilet}</li>
              </ul>
              <button
                className="cards-submit"
                type="button"
                onClick={() => setShownModal(true)}
              >
                Show more
              </button>
            </div>
          </div>
        ))}
      </div>
      {displayedCars < totalCars && (
        <button onClick={loadMore}>Load more</button>
      )}
      {shownModal && (
        <NeedHelpModal
          setShowModal={setShownModal}
          onClose={() => setShownModal(false)}
        />
      )}
    </div>
  );
}

export default CardItems;
