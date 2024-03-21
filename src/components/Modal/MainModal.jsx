import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NeedHelpModal from '../Modal/Modal';
import Location from 'components/icons/Location';
import Heart from 'components/icons/Heart';

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
                  <span className="heart">
                    <Heart />
                  </span>
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
    </div>
  );
}

export default CardItems;
