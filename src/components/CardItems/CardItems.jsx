import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../redux/slice';
import { selectFavorites } from '../../redux/selectors';
import Kitchen from 'components/icons/Kitchen';
import Adults from 'components/icons/Adults';
import Arrow from 'components/icons/Arrow';
import Petrol from 'components/icons/Petrol';
import Beds from 'components/icons/Beds';
import Bloom from 'components/icons/Bloom';
import Location from 'components/icons/Location';
import Heart from 'components/icons/Heart';
import Rating from '@mui/material/Rating';
import NeedHelpModal from '../Modal/Modal';

const CardItems = ({ cars }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const [selectedCar, setSelectedCar] = useState(null);
  const [shownModal, setShownModal] = useState(false);

  const countReviews = reviews => {
    return reviews.length;
  };
  const handleShowModal = carId => {
    setSelectedCar(carId);
    setShownModal(true);
  };

  return (
    <div className="wrapper">
      {cars.map(car => (
        <div className="catalog-cars" key={car._id}>
          <ul className="catalog-car">
            <li className="image-container">
              <img className="car-photo" src={car.gallery[0]} alt={car.name} />
            </li>
            <div className="details-container">
              <div className="title-container">
                <h2 className="title-cars">{car.name}</h2>
                <h2 className="title-price">€ {car.price.toFixed(2)}</h2>
                <button
                  className={`heart ${
                    favorites.some(item => item._id === car._id) ? 'active' : ''
                  }`}
                  onClick={() =>
                    favorites.some(item => item._id === car._id)
                      ? dispatch(removeFromFavorites(car._id))
                      : dispatch(addToFavorites(car))
                  }
                >
                  <Heart />
                </button>
              </div>
              <div className="rating-wrapper">
                <div className="rating-container">
                  <div className="rating">
                    <Rating
                      name="half-rating-read"
                      value={parseFloat(car.rating.toFixed(1))}
                      precision={0.1}
                      readOnly
                      max={1}
                    />
                  </div>
                  <p>{car.rating}</p>
                  <p>(Reviews: {countReviews(car.reviews)})</p>
                </div>

                <div className="location-info">
                  <p>
                    <Location /> {car.location}
                  </p>
                </div>
              </div>
              <li className="description">Description: {car.description}</li>
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
          </ul>
        </div>
      ))}
      {shownModal && (
        <NeedHelpModal
          carId={selectedCar}
          setShowModal={setShownModal}
          onClose={() => setShownModal(false)}
        />
      )}
    </div>
  );
};

export default CardItems;
