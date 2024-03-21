import React, { useState, useEffect } from 'react';
import './CardItems.css';
import NeedHelpModal from '../Modal/Modal';
import Kitchen from 'components/icons/Kitchen';
import Adults from 'components/icons/Adults';
import Arrow from 'components/icons/Arrow';
import Petrol from 'components/icons/Petrol';
import Beds from 'components/icons/Petrol';
import Bloom from 'components/icons/Bloom';
import Location from 'components/icons/Location';
import Heart from 'components/icons/Heart';
import { getAllCars } from '../../redux/operations';

const CardItems = () => {
  const [cars, setCars] = useState([]);
  const [displayedCars, setDisplayedCars] = useState(4);
  const [totalCars, setTotalCars] = useState(0);
  const [selectedCar, setSelectedCar] = useState(null);
  const [shownModal, setShownModal] = useState(false);

  useEffect(() => {
    getAllCars(displayedCars, setTotalCars, setCars);
  }, [displayedCars]);

  const countReviews = reviews => {
    return reviews.length;
  };

  const loadMore = () => {
    setDisplayedCars(displayedCars + 4);
  };

  const handleShowModal = carId => {
    setSelectedCar(carId);
    setShownModal(true);
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
                <div className="detail-container">
                  <div className="data-icons">
                    <span className="icon-container">
                      <Adults />
                    </span>
                    {car.adults && <>Adults: {car.adults}</>}
                  </div>
                  <div className="data-icons">
                    <span className="icon-container">
                      <Arrow />
                    </span>
                    {car.transmission}
                  </div>
                  <div className="data-icons">
                    {' '}
                    <span className="icon-container">
                      <Petrol />
                    </span>
                    {car.engine}
                  </div>
                  <div className="data-icons">
                    <span className="icon-container">
                      <Kitchen />
                    </span>
                    Kitchen: {car.details.kitchen}
                  </div>
                  <div className="data-icons">
                    <span className="icon-container">
                      <Beds />
                    </span>
                    {car.details.beds && <>Beds: {car.details.beds}</>}
                  </div>
                  <li className="data-icons">
                    <span className="icon-container">
                      <Bloom />
                    </span>{' '}
                    AC
                    {car.details.toilet}
                  </li>
                </div>
                <button
                  className="cards-submit"
                  type="button"
                  onClick={() => handleShowModal(car._id)}
                >
                  Show more
                </button>
              </div>
            </div>
          </div>
        ))}
        {displayedCars < totalCars && (
          <button className="loadmore" onClick={loadMore}>
            Load more
          </button>
        )}
        {shownModal && (
          <NeedHelpModal
            carId={selectedCar}
            setShowModal={setShownModal}
            onClose={() => setShownModal(false)}
          />
        )}
      </div>
    </div>
  );
};

export default CardItems;
